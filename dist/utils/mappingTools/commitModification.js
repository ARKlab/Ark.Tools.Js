function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as R from "ramda";
import { Left, Right, concat } from "sanctuary";
import { reader } from "./commitModsHelper";

var checkPrimaryKey = function checkPrimaryKey(_ref) {
  var row = _ref.row,
      pks = _ref.pks;
  return R.allPass(R.map(R.eqProps, pks))(row);
};

var alterMatch = R.curry(function (fn, state, row, pks) {
  return R.map(R.ifElse(checkPrimaryKey({
    row: row,
    pks: pks
  }), fn, R.identity), state);
});

var nonPrimaryKeyValuesAltered = function nonPrimaryKeyValuesAltered(modalData, pks, errMsg) {
  return R.equals(R.omit(pks, modalData.row), R.omit(pks, modalData.orig)) ? Left(errMsg) : Right(modalData);
};

var excludesPrimaryKey = R.curry(function (tableData, modalData, pks, errMsg) {
  return tableData.filter(checkPrimaryKey({
    row: modalData.row,
    pks: pks
  })).length > 0 ? Left([errMsg]) : Right(modalData);
});

var primaryKeyValuesMatch = function primaryKeyValuesMatch(modalData, pks, errMsg) {
  return R.all(function (x) {
    return R.equals(modalData.row[x], modalData.orig[x]);
  }, pks) ? Right(modalData) : Left([errMsg]);
};

var onlyNonPrimaryAltered = function onlyNonPrimaryAltered(modalData, pks, errMsg) {
  return R.pipe(function (x) {
    return primaryKeyValuesMatch(x, pks, errMsg);
  }, R.chain(function (x) {
    return nonPrimaryKeyValuesAltered(x, pks, errMsg);
  }))(modalData);
};

var addOrUpdate = function addOrUpdate(tableData, pks, errMsg) {
  return function (modalData) {
    return R.concat(excludesPrimaryKey(tableData, modalData, pks, errMsg), onlyNonPrimaryAltered(modalData, pks, errMsg));
  };
};

var isUpdate = R.ifElse(R.propEq("type", "Update Mapping"), Right, R.always(Left([])));
var getUpdater = reader(function (_ref2) {
  var _ref3 = _slicedToArray(_ref2, 4),
      pks = _ref3[0],
      errMsg = _ref3[1],
      modalData = _ref3[2],
      tableData = _ref3[3];

  return R.pipe(isUpdate, R.chain(addOrUpdate(tableData, pks, errMsg)), R.map(function (m) {
    return R.assoc("mod", m.type, m.row);
  }), R.map(R.assoc("original", modalData.orig.original || modalData.orig)), R.map(function (updated) {
    return alterMatch(R.always(updated), tableData, modalData.orig, pks);
  }))(modalData);
});
var isAdd = R.ifElse(R.propEq("type", "Add Mapping"), Right, R.always(Left([])));
var getAdder = reader(function (_ref4) {
  var _ref5 = _slicedToArray(_ref4, 4),
      pks = _ref5[0],
      errMsg = _ref5[1],
      modalData = _ref5[2],
      tableData = _ref5[3];

  return R.pipe(isAdd, R.chain(function (x) {
    return excludesPrimaryKey(tableData, x, pks, errMsg);
  }), R.map(function (m) {
    return R.assoc("mod", m.type, m.row);
  }), R.map(function (x) {
    return R.prepend(x, tableData);
  }))(modalData);
});
var getModifiers = R.traverse(reader.of, R.identity, [getUpdater, getAdder]).map(R.apply(concat));
export var commitChangesHelper = getModifiers.run;
export default commitChangesHelper;