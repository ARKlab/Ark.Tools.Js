import * as R from "ramda";

var checkPrimaryKey = function checkPrimaryKey(_ref) {
  var row = _ref.row,
      pks = _ref.pks;
  return R.allPass(R.map(R.eqProps, pks))(row);
};

var alterMatch = R.curry(function (_ref2) {
  var data = _ref2.data,
      row = _ref2.row,
      pks = _ref2.pks,
      func = _ref2.func;
  return R.map(R.ifElse(checkPrimaryKey({
    row: row,
    pks: pks
  }), func, R.identity), data);
});
export var removeModificationHelper = function removeModificationHelper(_ref3) {
  var data = _ref3.data,
      row = _ref3.row,
      pks = _ref3.pks;

  switch (row.mod) {
    case "Add Mapping":
      return R.filter(R.complement(checkPrimaryKey({
        row: row,
        pks: pks
      })), data);

    case "Delete":
      return alterMatch({
        func: R.dissoc("mod"),
        data: data,
        row: row,
        pks: pks
      });

    case "Update Mapping":
      return alterMatch({
        func: R.prop("original"),
        data: data,
        row: row,
        pks: pks
      });

    default:
      return data;
  }
};
export default removeModificationHelper;