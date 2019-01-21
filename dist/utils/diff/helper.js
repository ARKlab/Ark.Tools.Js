import json2xls from "json2xls";

var s2ab = function s2ab(s) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);

  for (var i = 0; i !== s.length; i += 1) {
    view[i] = s.charCodeAt(i) & 0xff;
  }

  return buf;
};

export var downloadExcel = function downloadExcel(_ref) {
  var data = _ref.data,
      fileName = _ref.fileName;
  var json2xlsData = json2xls(data);
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