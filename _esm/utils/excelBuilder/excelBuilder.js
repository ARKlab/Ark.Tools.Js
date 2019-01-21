"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.excelBuilder = void 0;

var R = _interopRequireWildcard(require("ramda"));

var _helper = require("./helper");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var createExcelRow = function createExcelRow(_ref) {
  var data = _ref.data,
      list = _ref.list;
  var val = [];
  list.map(function (x) {
    val.push([x.colName, R.prop(x.propName, data)]);
  });
  return R.pipe(R.fromPairs)(val);
};

var excelBuilder = function excelBuilder(_ref2) {
  var arr = _ref2.arr,
      list = _ref2.list,
      fileName = _ref2.fileName;
  return R.pipe(R.map(function (data) {
    return createExcelRow({
      data: data,
      list: list
    });
  }), function (data) {
    return (0, _helper.downloadExcel)({
      data: data,
      fileName: fileName
    });
  })(arr);
};

exports.excelBuilder = excelBuilder;
var _default = excelBuilder;
exports.default = _default;