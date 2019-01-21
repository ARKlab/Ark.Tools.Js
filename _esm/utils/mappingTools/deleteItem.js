"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.deleteItemHelper = void 0;

var R = _interopRequireWildcard(require("ramda"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var deleteItemHelper = function deleteItemHelper(_ref3) {
  var data = _ref3.data,
      row = _ref3.row,
      pks = _ref3.pks;
  return alterMatch({
    data: data,
    row: row,
    pks: pks,
    func: R.assoc("mod", "Delete")
  });
};

exports.deleteItemHelper = deleteItemHelper;
var _default = deleteItemHelper;
exports.default = _default;