import * as R from "ramda";
import { Left, Right, concat } from "sanctuary";
import { reader, sanctuaryConcat } from "./commitModsHelper";

const checkPrimaryKey = ({ row, pks }: { row: any; pks: any }): any =>
  R.allPass(R.map(R.eqProps, pks))(row);

const alterMatch = R.curry((fn: any, state: any, row: any, pks: any) =>
  R.map(R.ifElse(checkPrimaryKey({ row, pks }), fn, R.identity), state)
);

const nonPrimaryKeyValuesAltered = (
  modalData: any,
  pks: any,
  errMsg: string
): any =>
  R.equals(R.omit(pks, modalData.row), R.omit(pks, modalData.orig))
    ? Left(errMsg)
    : Right(modalData);

const excludesPrimaryKey = R.curry(
  (tableData: any, modalData: any, pks: any, errMsg: string): any =>
    tableData.filter(checkPrimaryKey({ row: modalData.row, pks })).length > 0
      ? Left([errMsg])
      : Right(modalData)
);

const primaryKeyValuesMatch = (modalData: any, pks: any, errMsg: string): any =>
  R.all((x: any) => R.equals(modalData.row[x], modalData.orig[x]), pks)
    ? Right(modalData)
    : Left([errMsg]);

const onlyNonPrimaryAltered = (modalData: any, pks: any, errMsg: string) =>
  R.pipe(
    (x: any) => primaryKeyValuesMatch(x, pks, errMsg),
    R.chain(x => nonPrimaryKeyValuesAltered(x, pks, errMsg))
  )(modalData);

const addOrUpdate = (tableData: any, pks: any, errMsg: string): any => (
  modalData: any
) =>
  sanctuaryConcat(
    excludesPrimaryKey(tableData, modalData, pks, errMsg),
    onlyNonPrimaryAltered(modalData, pks, errMsg)
  );

const isUpdate = R.ifElse(
  R.propEq("type", "Update Mapping"),
  Right,
  R.always(Left([]))
);

const getUpdater = reader(
  ({
    pks,
    errMsg,
    modalData,
    tableData
  }: {
    pks: any;
    errMsg: string;
    modalData: any;
    tableData: any;
  }) =>
    R.pipe(
      isUpdate,
      R.chain(addOrUpdate(tableData, pks, errMsg)),
      R.map((m: any) => R.assoc("mod", m.type, m.row)),
      R.map(R.assoc("original", modalData.orig.original || modalData.orig)),
      R.map(updated =>
        alterMatch(R.always(updated), tableData, modalData.orig, pks)
      )
    )(modalData)
);

const isAdd = R.ifElse(
  R.propEq("type", "Add Mapping"),
  Right,
  R.always(Left([]))
);
const getAdder = reader(
  ({
    pks,
    errMsg,
    modalData,
    tableData
  }: {
    pks: any;
    errMsg: string;
    modalData: any;
    tableData: any;
  }) =>
    R.pipe(
      isAdd,
      R.chain(x => excludesPrimaryKey(tableData, x, pks, errMsg)),
      R.map((m: any) => R.assoc("mod", m.type, m.row)),
      R.map(x => R.prepend(x, tableData))
    )(modalData)
);
const getModifiers = R.traverse<any, any, any>(reader.of, R.identity, [
  getUpdater,
  getAdder
]).map(R.apply(concat));

export const commitChangesHelper = ({
  pks,
  errMsg,
  modalData,
  tableData
}: {
  pks: any;
  errMsg: string;
  modalData: any;
  tableData: any;
}) =>
  getModifiers.run({
    pks,
    errMsg,
    modalData,
    tableData
  });

export default commitChangesHelper;
