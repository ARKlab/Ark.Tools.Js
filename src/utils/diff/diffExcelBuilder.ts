import * as R from "ramda";
import { downloadExcel } from "./helper";

const createExcelRow = ({
  previous,
  current,
  list
}: {
  previous: any;
  current: any;
  list: any;
}) => {
  let val: any = [];
  list.map((x: any) => {
    val.push([`Previous ${x.colName}`, R.prop(x.propName, previous)]);
  });
  val.push(["", ""]);
  list.map((x: any) =>
    val.push([`Current ${x.colName}`, R.prop(x.propName, current)])
  );

  return R.pipe<any, any>(R.fromPairs)(val);
};

const nilCheck = (arr: any, index: number) =>
  R.isNil(arr[index]) ? {} : arr[index];

const mapData = ({ prev, curr, list }: { prev: any; curr: any; list: any }) =>
  R.length(prev) > R.length(curr)
    ? prev.map((x: any, i: number) =>
        createExcelRow({
          previous: nilCheck(prev, i),
          current: nilCheck(curr, i),
          list
        })
      )
    : curr.map((x: any, i: number) =>
        createExcelRow({
          previous: nilCheck(prev, i),
          current: nilCheck(curr, i),
          list
        })
      );

export const excelBuilder = ({
  prev,
  curr,
  list,
  fileName
}: {
  prev: any;
  curr: any;
  list: any;
  fileName: string;
}) =>
  R.pipe(
    mapData,
    (data: any) => downloadExcel({ data, fileName })
  )({
    prev,
    curr,
    list
  });

export default excelBuilder;
