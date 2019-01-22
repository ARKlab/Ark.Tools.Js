"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.commitChangesHelper = void 0;

var R = _interopRequireWildcard(require("ramda"));

var _sanctuary = require("sanctuary");

var _commitModsHelper = require("./commitModsHelper");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  return R.equals(R.omit(pks, modalData.row), R.omit(pks, modalData.orig)) ? (0, _sanctuary.Left)(errMsg) : (0, _sanctuary.Right)(modalData);
};

var excludesPrimaryKey = R.curry(function (tableData, modalData, pks, errMsg) {
  return tableData.filter(checkPrimaryKey({
    row: modalData.row,
    pks: pks
  })).length > 0 ? (0, _sanctuary.Left)([errMsg]) : (0, _sanctuary.Right)(modalData);
});

var primaryKeyValuesMatch = function primaryKeyValuesMatch(modalData, pks, errMsg) {
  return R.all(function (x) {
    return R.equals(modalData.row[x], modalData.orig[x]);
  }, pks) ? (0, _sanctuary.Right)(modalData) : (0, _sanctuary.Left)([errMsg]);
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

var isUpdate = R.ifElse(R.propEq("type", "Update Mapping"), _sanctuary.Right, R.always((0, _sanctuary.Left)([])));
var getUpdater = (0, _commitModsHelper.reader)(function (_ref2) {
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
var isAdd = R.ifElse(R.propEq("type", "Add Mapping"), _sanctuary.Right, R.always((0, _sanctuary.Left)([])));
var getAdder = (0, _commitModsHelper.reader)(function (_ref4) {
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
var getModifiers = R.traverse(_commitModsHelper.reader.of, R.identity, [getUpdater, getAdder]).map(R.apply(_sanctuary.concat));
var commitChangesHelper = getModifiers.run;
exports.commitChangesHelper = commitChangesHelper;
var _default = commitChangesHelper;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9tYXBwaW5nVG9vbHMvY29tbWl0TW9kaWZpY2F0aW9uLnRzIl0sIm5hbWVzIjpbImNoZWNrUHJpbWFyeUtleSIsInJvdyIsInBrcyIsIlIiLCJhbGxQYXNzIiwibWFwIiwiZXFQcm9wcyIsImFsdGVyTWF0Y2giLCJjdXJyeSIsImZuIiwic3RhdGUiLCJpZkVsc2UiLCJpZGVudGl0eSIsIm5vblByaW1hcnlLZXlWYWx1ZXNBbHRlcmVkIiwibW9kYWxEYXRhIiwiZXJyTXNnIiwiZXF1YWxzIiwib21pdCIsIm9yaWciLCJleGNsdWRlc1ByaW1hcnlLZXkiLCJ0YWJsZURhdGEiLCJmaWx0ZXIiLCJsZW5ndGgiLCJwcmltYXJ5S2V5VmFsdWVzTWF0Y2giLCJhbGwiLCJ4Iiwib25seU5vblByaW1hcnlBbHRlcmVkIiwicGlwZSIsImNoYWluIiwiYWRkT3JVcGRhdGUiLCJjb25jYXQiLCJpc1VwZGF0ZSIsInByb3BFcSIsIlJpZ2h0IiwiYWx3YXlzIiwiZ2V0VXBkYXRlciIsIm0iLCJhc3NvYyIsInR5cGUiLCJvcmlnaW5hbCIsInVwZGF0ZWQiLCJpc0FkZCIsImdldEFkZGVyIiwicHJlcGVuZCIsImdldE1vZGlmaWVycyIsInRyYXZlcnNlIiwicmVhZGVyIiwib2YiLCJhcHBseSIsImNvbW1pdENoYW5nZXNIZWxwZXIiLCJydW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLE1BQUdDLEdBQUgsUUFBR0EsR0FBSDtBQUFBLE1BQVFDLEdBQVIsUUFBUUEsR0FBUjtBQUFBLFNBQ3RCQyxDQUFDLENBQUNDLE9BQUYsQ0FBVUQsQ0FBQyxDQUFDRSxHQUFGLENBQU1GLENBQUMsQ0FBQ0csT0FBUixFQUFpQkosR0FBakIsQ0FBVixFQUFpQ0QsR0FBakMsQ0FEc0I7QUFBQSxDQUF4Qjs7QUFHQSxJQUFNTSxVQUFVLEdBQUdKLENB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ekM7O2VBRVFELG1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUiBmcm9tIFwicmFtZGFcIjtcclxuaW1wb3J0IHsgTGVmdCwgUmlnaHQsIGNvbmNhdCB9IGZyb20gXCJzYW5jdHVhcnlcIjtcclxuaW1wb3J0IHsgcmVhZGVyIH0gZnJvbSBcIi4vY29tbWl0TW9kc0hlbHBlclwiO1xyXG5cclxuY29uc3QgY2hlY2tQcmltYXJ5S2V5ID0gKHsgcm93LCBwa3MgfTogeyByb3c6IGFueTsgcGtzOiBhbnkgfSk6IGFueSA9PlxyXG4gIFIuYWxsUGFzcyhSLm1hcChSLmVxUHJvcHMsIHBrcykpKHJvdyk7XHJcblxyXG5jb25zdCBhbHRlck1hdGNoID0gUi5jdXJyeSgoZm46IGFueSwgc3RhdGU6IGFueSwgcm93OiBhbnksIHBrczogYW55KSA9PlxyXG4gIFIubWFwKFIuaWZFbHNlKGNoZWNrUHJpbWFyeUtleSh7IHJvdywgcGtzIH0pLCBmbiwgUi5pZGVudGl0eSksIHN0YXRlKVxyXG4pO1xyXG5cclxuY29uc3Qgbm9uUHJpbWFyeUtleVZhbHVlc0FsdGVyZWQgPSAoXHJcbiAgbW9kYWxEYXRhOiBhbnksXHJcbiAgcGtzOiBhbnksXHJcbiAgZXJyTXNnOiBhbnlcclxuKTogYW55ID0+XHJcbiAgUi5lcXVhbHMoUi5vbWl0KHBrcywgbW9kYWxEYXRhLnJvdyksIFIub21pdChwa3MsIG1vZGFsRGF0YS5vcmlnKSlcclxuICAgID8gTGVmdChlcnJNc2cpXHJcbiAgICA6IFJpZ2h0KG1vZGFsRGF0YSk7XHJcblxyXG5jb25zdCBleGNsdWRlc1ByaW1hcnlLZXkgPSBSLmN1cnJ5KFxyXG4gICh0YWJsZURhdGE6IGFueSwgbW9kYWxEYXRhOiBhbnksIHBrczogYW55LCBlcnJNc2c6IGFueSk6IGFueSA9PlxyXG4gICAgdGFibGVEYXRhLmZpbHRlcihjaGVja1ByaW1hcnlLZXkoeyByb3c6IG1vZGFsRGF0YS5yb3csIHBrcyB9KSkubGVuZ3RoID4gMFxyXG4gICAgICA/IExlZnQoW2Vyck1zZ10pXHJcbiAgICAgIDogUmlnaHQobW9kYWxEYXRhKVxyXG4pO1xyXG5cclxuY29uc3QgcHJpbWFyeUtleVZhbHVlc01hdGNoID0gKG1vZGFsRGF0YTogYW55LCBwa3M6IGFueSwgZXJyTXNnOiBhbnkpOiBhbnkgPT5cclxuICBSLmFsbCgoeDogYW55KSA9PiBSLmVxdWFscyhtb2RhbERhdGEucm93W3hdLCBtb2RhbERhdGEub3JpZ1t4XSksIHBrcylcclxuICAgID8gUmlnaHQobW9kYWxEYXRhKVxyXG4gICAgOiBMZWZ0KFtlcnJNc2ddKTtcclxuXHJcbmNvbnN0IG9ubHlOb25QcmltYXJ5QWx0ZXJlZCA9IChtb2RhbERhdGE6IGFueSwgcGtzOiBhbnksIGVyck1zZzogYW55KSA9PlxyXG4gIFIucGlwZShcclxuICAgICh4OiBhbnkpID0+IHByaW1hcnlLZXlWYWx1ZXNNYXRjaCh4LCBwa3MsIGVyck1zZyksXHJcbiAgICBSLmNoYWluKHggPT4gbm9uUHJpbWFyeUtleVZhbHVlc0FsdGVyZWQoeCwgcGtzLCBlcnJNc2cpKVxyXG4gICkobW9kYWxEYXRhKTtcclxuXHJcbmNvbnN0IGFkZE9yVXBkYXRlID0gKHRhYmxlRGF0YTogYW55LCBwa3M6IGFueSwgZXJyTXNnOiBhbnkpOiBhbnkgPT4gKFxyXG4gIG1vZGFsRGF0YTogYW55XHJcbikgPT5cclxuICBSLmNvbmNhdChcclxuICAgIGV4Y2x1ZGVzUHJpbWFyeUtleSh0YWJsZURhdGEsIG1vZGFsRGF0YSwgcGtzLCBlcnJNc2cpLFxyXG4gICAgb25seU5vblByaW1hcnlBbHRlcmVkKG1vZGFsRGF0YSwgcGtzLCBlcnJNc2cpXHJcbiAgKTtcclxuXHJcbmNvbnN0IGlzVXBkYXRlID0gUi5pZkVsc2UoXHJcbiAgUi5wcm9wRXEoXCJ0eXBlXCIsIFwiVXBkYXRlIE1hcHBpbmdcIiksXHJcbiAgUmlnaHQsXHJcbiAgUi5hbHdheXMoTGVmdChbXSkpXHJcbik7XHJcblxyXG5jb25zdCBnZXRVcGRhdGVyID0gcmVhZGVyKChbcGtzLCBlcnJNc2csIG1vZGFsRGF0YSwgdGFibGVEYXRhXTogYW55KSA9PlxyXG4gIFIucGlwZShcclxuICAgIGlzVXBkYXRlLFxyXG4gICAgUi5jaGFpbihhZGRPclVwZGF0ZSh0YWJsZURhdGEsIHBrcywgZXJyTXNnKSksXHJcbiAgICBSLm1hcCgobTogYW55KSA9PiBSLmFzc29jKFwibW9kXCIsIG0udHlwZSwgbS5yb3cpKSxcclxuICAgIFIubWFwKFIuYXNzb2MoXCJvcmlnaW5hbFwiLCBtb2RhbERhdGEub3JpZy5vcmlnaW5hbCB8fCBtb2RhbERhdGEub3JpZykpLFxyXG4gICAgUi5tYXAodXBkYXRlZCA9PlxyXG4gICAgICBhbHRlck1hdGNoKFIuYWx3YXlzKHVwZGF0ZWQpLCB0YWJsZURhdGEsIG1vZGFsRGF0YS5vcmlnLCBwa3MpXHJcbiAgICApXHJcbiAgKShtb2RhbERhdGEpXHJcbik7XHJcblxyXG5jb25zdCBpc0FkZCA9IFIuaWZFbHNlKFxyXG4gIFIucHJvcEVxKFwidHlwZVwiLCBcIkFkZCBNYXBwaW5nXCIpLFxyXG4gIFJpZ2h0LFxyXG4gIFIuYWx3YXlzKExlZnQoW10pKVxyXG4pO1xyXG5jb25zdCBnZXRBZGRlciA9IHJlYWRlcigoW3BrcywgZXJyTXNnLCBtb2RhbERhdGEsIHRhYmxlRGF0YV06IGFueSkgPT5cclxuICBSLnBpcGUoXHJcbiAgICBpc0FkZCxcclxuICAgIFIuY2hhaW4oeCA9PiBleGNsdWRlc1ByaW1hcnlLZXkodGFibGVEYXRhLCB4LCBwa3MsIGVyck1zZykpLFxyXG4gICAgUi5tYXAoKG06IGFueSkgPT4gUi5hc3NvYyhcIm1vZFwiLCBtLnR5cGUsIG0ucm93KSksXHJcbiAgICBSLm1hcCh4ID0+IFIucHJlcGVuZCh4LCB0YWJsZURhdGEpKVxyXG4gICkobW9kYWxEYXRhKVxyXG4pO1xyXG5jb25zdCBnZXRNb2RpZmllcnMgPSBSLnRyYXZlcnNlPGFueSwgYW55LCBhbnk+KHJlYWRlci5vZiwgUi5pZGVudGl0eSwgW1xyXG4gIGdldFVwZGF0ZXIsXHJcbiAgZ2V0QWRkZXJcclxuXSkubWFwKFIuYXBwbHkoY29uY2F0KSk7XHJcblxyXG5leHBvcnQgY29uc3QgY29tbWl0Q2hhbmdlc0hlbHBlciA9IGdldE1vZGlmaWVycy5ydW47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21taXRDaGFuZ2VzSGVscGVyO1xyXG4iXX0=