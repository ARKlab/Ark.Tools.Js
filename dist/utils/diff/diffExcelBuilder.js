import * as R from "ramda";
import { downloadExcel } from "./helper";

var createExcelRow = function createExcelRow(_ref) {
  var previous = _ref.previous,
      current = _ref.current,
      list = _ref.list;
  var val = [];
  list.map(function (x) {
    val.push(["Previous ".concat(x.colName), R.prop(x.propName, previous)]);
  });
  val.push(["", ""]);
  list.map(function (x) {
    return val.push(["Current ".concat(x.colName), R.prop(x.propName, current)]);
  });
  return R.pipe(R.fromPairs)(val);
};

var nilCheck = function nilCheck(arr, index) {
  return R.isNil(arr[index]) ? {} : arr[index];
};

var mapData = function mapData(_ref2) {
  var prev = _ref2.prev,
      curr = _ref2.curr,
      list = _ref2.list;
  return R.length(prev) > R.length(curr) ? prev.map(function (x, i) {
    return createExcelRow({
      previous: nilCheck(prev, i),
      current: nilCheck(curr, i),
      list: list
    });
  }) : curr.map(function (x, i) {
    return createExcelRow({
      previous: nilCheck(prev, i),
      current: nilCheck(curr, i),
      list: list
    });
  });
};

export var excelBuilder = function excelBuilder(_ref3) {
  var prev = _ref3.prev,
      curr = _ref3.curr,
      list = _ref3.list,
      fileName = _ref3.fileName;
  return R.pipe(mapData, function (data) {
    return downloadExcel({
      data: data,
      fileName: fileName
    });
  })({
    prev: prev,
    curr: curr,
    list: list
  });
};
export default excelBuilder;