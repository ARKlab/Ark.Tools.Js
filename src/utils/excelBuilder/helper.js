import json2xls from "json2xls";

const s2ab = s => {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i !== s.length; i += 1) {
    view[i] = s.charCodeAt(i) & 0xff;
  }
  return buf;
};

export const downloadExcel = ({ data, fileName }) => {
  const json2xlsData = json2xls(data);
  const csv = btoa(json2xlsData);
  const blob = new Blob([s2ab(atob(csv))], {
    type: ""
  });
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, `${fileName}.xlsx`);
  } else {
    const a = document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = `${fileName}.xlsx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  return true;
};
