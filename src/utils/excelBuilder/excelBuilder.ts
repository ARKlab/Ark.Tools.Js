import * as R from "ramda";
import { downloadExcel } from "./helper";

const createExcelRow = ({ data, list }: { data: any; list: any }) => {
  const val: any = [];
  list.map((x: any) => {
    val.push([x.colName, R.prop(x.propName, data)]);
  });
  return R.pipe<any, any>(R.fromPairs)(val);
};

export const excelBuilder = ({
  arr,
  list,
  fileName
}: {
  arr: any;
  list: any;
  fileName: string;
}) =>
  R.pipe(
    R.map((data: any) => createExcelRow({ data, list })),
    (data: any) => downloadExcel({ data, fileName })
  )(arr);

export default excelBuilder;
