import * as R from "ramda";
import { downloadExcel } from "./helper";

var createExcelRow = function createExcelRow(_ref) {
  var data = _ref.data,
      list = _ref.list;
  var val = [];
  list.map(function (x) {
    val.push([x.colName, R.prop(x.propName, data)]);
  });
  return R.pipe(R.fromPairs)(val);
};

export var excelBuilder = function excelBuilder(_ref2) {
  var arr = _ref2.arr,
      list = _ref2.list,
      fileName = _ref2.fileName;
  return R.pipe(R.map(function (data) {
    return createExcelRow({
      data: data,
      list: list
    });
  }), function (data) {
    return downloadExcel({
      data: data,
      fileName: fileName
    });
  })(arr);
};
export default excelBuilder;