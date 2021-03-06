import * as R from "ramda";

const checkPrimaryKey = ({ row, pks }: { row: any; pks: any }): any =>
  R.allPass(R.map(R.eqProps, pks))(row);

const alterMatch = R.curry(
  ({ data, row, pks, func }: { data: any; row: any; pks: any; func: any }) =>
    R.map(R.ifElse(checkPrimaryKey({ row, pks }), func, R.identity), data)
);

export const deleteItemHelper = ({
  data,
  row,
  pks
}: {
  data: any;
  row: any;
  pks: any;
}) => alterMatch({ data, row, pks, func: R.assoc("mod", "Delete") });

export default deleteItemHelper;
