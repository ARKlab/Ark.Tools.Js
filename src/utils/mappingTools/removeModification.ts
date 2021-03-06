import * as R from "ramda";

const checkPrimaryKey = ({ row, pks }: { row: any; pks: any }): any =>
  R.allPass(R.map(R.eqProps, pks))(row);

const alterMatch = R.curry(
  ({ data, row, pks, func }: { data: any; row: any; pks: any; func: any }) =>
    R.map(R.ifElse(checkPrimaryKey({ row, pks }), func, R.identity), data)
);

export const removeModificationHelper = ({
  data,
  row,
  pks
}: {
  data: any;
  row: any;
  pks: any;
}) => {
  switch (row.mod) {
    case "Add Mapping":
      return R.filter(R.complement(checkPrimaryKey({ row, pks })), data);
    case "Delete":
      return alterMatch({ func: R.dissoc("mod"), data, row, pks });
    case "Update Mapping":
      return alterMatch({ func: R.prop("original"), data, row, pks });
    default:
      return data;
  }
};

export default removeModificationHelper;
