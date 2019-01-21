"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadExcel = void 0;

var _json2xls = _interopRequireDefault(require("json2xls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s2ab = function s2ab(s) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);

  for (var i = 0; i !== s.length; i += 1) {
    view[i] = s.charCodeAt(i) & 0xff;
  }

  return buf;
};

var downloadExcel = function downloadExcel(_ref) {
  var data = _ref.data,
      fileName = _ref.fileName;
  var json2xlsData = (0, _json2xls.default)(data);
  var csv = btoa(json2xlsData);
  var blob = new Blob([s2ab(atob(csv))], {
    type: ""
  });

  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, "".concat(fileName, ".xlsx"));
  } else {
    var a = document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = "".concat(fileName, ".xlsx");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return true;
};

exports.downloadExcel = downloadExcel;