"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.commitChangesHelper = void 0;

var R = _interopRequireWildcard(require("ramda"));

var _sanctuary = require("sanctuary");

var _commitModsHelper = require("./commitModsHelper");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
    return (0, _commitModsHelper.sanctuaryConcat)(excludesPrimaryKey(tableData, modalData, pks, errMsg), onlyNonPrimaryAltered(modalData, pks, errMsg));
  };
};

var isUpdate = R.ifElse(R.propEq("type", "Update Mapping"), _sanctuary.Right, R.always((0, _sanctuary.Left)([])));
var getUpdater = (0, _commitModsHelper.reader)(function (_ref2) {
  var pks = _ref2.pks,
      errMsg = _ref2.errMsg,
      modalData = _ref2.modalData,
      tableData = _ref2.tableData;
  return R.pipe(isUpdate, R.chain(addOrUpdate(tableData, pks, errMsg)), R.map(function (m) {
    return R.assoc("mod", m.type, m.row);
  }), R.map(R.assoc("original", modalData.orig.original || modalData.orig)), R.map(function (updated) {
    return alterMatch(R.always(updated), tableData, modalData.orig, pks);
  }))(modalData);
});
var isAdd = R.ifElse(R.propEq("type", "Add Mapping"), _sanctuary.Right, R.always((0, _sanctuary.Left)([])));
var getAdder = (0, _commitModsHelper.reader)(function (_ref3) {
  var pks = _ref3.pks,
      errMsg = _ref3.errMsg,
      modalData = _ref3.modalData,
      tableData = _ref3.tableData;
  return R.pipe(isAdd, R.chain(function (x) {
    return excludesPrimaryKey(tableData, x, pks, errMsg);
  }), R.map(function (m) {
    return R.assoc("mod", m.type, m.row);
  }), R.map(function (x) {
    return R.prepend(x, tableData);
  }))(modalData);
});
var getModifiers = R.traverse(_commitModsHelper.reader.of, R.identity, [getUpdater, getAdder]).map(R.apply(_sanctuary.concat));

var commitChangesHelper = function commitChangesHelper(_ref4) {
  var pks = _ref4.pks,
      errMsg = _ref4.errMsg,
      modalData = _ref4.modalData,
      tableData = _ref4.tableData;
  return getModifiers.run({
    pks: pks,
    errMsg: errMsg,
    modalData: modalData,
    tableData: tableData
  });
};

exports.commitChangesHelper = commitChangesHelper;
var _default = commitChangesHelper;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9tYXBwaW5nVG9vbHMvY29tbWl0TW9kaWZpY2F0aW9uLnRzIl0sIm5hbWVzIjpbImNoZWNrUHJpbWFyeUtleSIsInJvdyIsInBrcyIsIlIiLCJhbGxQYXNzIiwibWFwIiwiZXFQcm9wcyIsImFsdGVyTWF0Y2giLCJjdXJyeSIsImZuIiwic3RhdGUiLCJpZkVsc2UiLCJpZGVudGl0eSIsIm5vblByaW1hcnlLZXlWYWx1ZXNBbHRlcmVkIiwibW9kYWxEYXRhIiwiZXJyTXNnIiwiZXF1YWxzIiwib21pdCIsIm9yaWciLCJleGNsdWRlc1ByaW1hcnlLZXkiLCJ0YWJsZURhdGEiLCJmaWx0ZXIiLCJsZW5ndGgiLCJwcmltYXJ5S2V5VmFsdWVzTWF0Y2giLCJhbGwiLCJ4Iiwib25seU5vblByaW1hcnlBbHRlcmVkIiwicGlwZSIsImNoYWluIiwiYWRkT3JVcGRhdGUiLCJpc1VwZGF0ZSIsInByb3BFcSIsIlJpZ2h0IiwiYWx3YXlzIiwiZ2V0VXBkYXRlciIsIm0iLCJhc3NvYyIsInR5cGUiLCJvcmlnaW5hbCIsInVwZGF0ZWQiLCJpc0FkZCIsImdldEFkZGVyIiwicHJlcGVuZCIsImdldE1vZGlmaWVycyIsInRyYXZlcnNlIiwicmVhZGVyIiwib2YiLCJhcHBseSIsImNvbmNhdCIsImNvbW1pdENoYW5nZXNIZWxwZXIiLCJydW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxNQUFHQyxHQUFILFFBQUdBLEdBQUg7QUFBQSxNQUFRQyxHQUFSLFFBQVFBLEdBQVI7QUFBQSxTQUN0QkMsQ0FBQyxDQUFDQyxPQUFGLENBQVVELENBQUMsQ0FBQ0UsR0FBRixDQUFNRixDQUFDLENBQUNHLE9BQVIsRUFBaUJKLEdBQWpCLENBQVYsRUFBaUNELEdBQWpDLENBRHNCO0FBQUEsQ0FBeEI7O0FBR0EsSUFBTU0sVUFBVSxHQUFHSixDQUFDLENBQUNL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Q0FBckI7O0FBS08sSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQjtBQUFBLE1BQ2pDL0MsR0FEaUMsU0FDakNBLEdBRGlDO0FBQUEsTUFFakNhLE1BRmlDLFNBRWpDQSxNQUZpQztBQUFBLE1BR2pDRCxTQUhpQyxTQUdqQ0EsU0FIaUM7QUFBQSxNQUlqQ00sU0FKaUMsU0FJakNBLFNBSmlDO0FBQUEsU0FXakN1QixZQUFZLENBQUNPLEdBQWIsQ0FBaUI7QUFDZmhELElBQUFBLEdBQUcsRUFBSEEsR0FEZTtBQUVmYSxJQUFBQSxNQUFNLEVBQU5BLE1BRmU7QUFHZkQsSUFBQUEsU0FBUyxFQUFUQSxTQUhlO0FBSWZNLElBQUFBLFNBQVMsRUFBVEE7QUFKZSxHQUFqQixDQVhpQztBQUFBLENBQTVCOzs7ZUFrQlE2QixtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFIgZnJvbSBcInJhbWRhXCI7XHJcbmltcG9ydCB7IExlZnQsIFJpZ2h0LCBjb25jYXQgfSBmcm9tIFwic2FuY3R1YXJ5XCI7XHJcbmltcG9ydCB7IHJlYWRlciwgc2FuY3R1YXJ5Q29uY2F0IH0gZnJvbSBcIi4vY29tbWl0TW9kc0hlbHBlclwiO1xyXG5cclxuY29uc3QgY2hlY2tQcmltYXJ5S2V5ID0gKHsgcm93LCBwa3MgfTogeyByb3c6IGFueTsgcGtzOiBhbnkgfSk6IGFueSA9PlxyXG4gIFIuYWxsUGFzcyhSLm1hcChSLmVxUHJvcHMsIHBrcykpKHJvdyk7XHJcblxyXG5jb25zdCBhbHRlck1hdGNoID0gUi5jdXJyeSgoZm46IGFueSwgc3RhdGU6IGFueSwgcm93OiBhbnksIHBrczogYW55KSA9PlxyXG4gIFIubWFwKFIuaWZFbHNlKGNoZWNrUHJpbWFyeUtleSh7IHJvdywgcGtzIH0pLCBmbiwgUi5pZGVudGl0eSksIHN0YXRlKVxyXG4pO1xyXG5cclxuY29uc3Qgbm9uUHJpbWFyeUtleVZhbHVlc0FsdGVyZWQgPSAoXHJcbiAgbW9kYWxEYXRhOiBhbnksXHJcbiAgcGtzOiBhbnksXHJcbiAgZXJyTXNnOiBzdHJpbmdcclxuKTogYW55ID0+XHJcbiAgUi5lcXVhbHMoUi5vbWl0KHBrcywgbW9kYWxEYXRhLnJvdyksIFIub21pdChwa3MsIG1vZGFsRGF0YS5vcmlnKSlcclxuICAgID8gTGVmdChlcnJNc2cpXHJcbiAgICA6IFJpZ2h0KG1vZGFsRGF0YSk7XHJcblxyXG5jb25zdCBleGNsdWRlc1ByaW1hcnlLZXkgPSBSLmN1cnJ5KFxyXG4gICh0YWJsZURhdGE6IGFueSwgbW9kYWxEYXRhOiBhbnksIHBrczogYW55LCBlcnJNc2c6IHN0cmluZyk6IGFueSA9PlxyXG4gICAgdGFibGVEYXRhLmZpbHRlcihjaGVja1ByaW1hcnlLZXkoeyByb3c6IG1vZGFsRGF0YS5yb3csIHBrcyB9KSkubGVuZ3RoID4gMFxyXG4gICAgICA/IExlZnQoW2Vyck1zZ10pXHJcbiAgICAgIDogUmlnaHQobW9kYWxEYXRhKVxyXG4pO1xyXG5cclxuY29uc3QgcHJpbWFyeUtleVZhbHVlc01hdGNoID0gKG1vZGFsRGF0YTogYW55LCBwa3M6IGFueSwgZXJyTXNnOiBzdHJpbmcpOiBhbnkgPT5cclxuICBSLmFsbCgoeDogYW55KSA9PiBSLmVxdWFscyhtb2RhbERhdGEucm93W3hdLCBtb2RhbERhdGEub3JpZ1t4XSksIHBrcylcclxuICAgID8gUmlnaHQobW9kYWxEYXRhKVxyXG4gICAgOiBMZWZ0KFtlcnJNc2ddKTtcclxuXHJcbmNvbnN0IG9ubHlOb25QcmltYXJ5QWx0ZXJlZCA9IChtb2RhbERhdGE6IGFueSwgcGtzOiBhbnksIGVyck1zZzogc3RyaW5nKSA9PlxyXG4gIFIucGlwZShcclxuICAgICh4OiBhbnkpID0+IHByaW1hcnlLZXlWYWx1ZXNNYXRjaCh4LCBwa3MsIGVyck1zZyksXHJcbiAgICBSLmNoYWluKHggPT4gbm9uUHJpbWFyeUtleVZhbHVlc0FsdGVyZWQoeCwgcGtzLCBlcnJNc2cpKVxyXG4gICkobW9kYWxEYXRhKTtcclxuXHJcbmNvbnN0IGFkZE9yVXBkYXRlID0gKHRhYmxlRGF0YTogYW55LCBwa3M6IGFueSwgZXJyTXNnOiBzdHJpbmcpOiBhbnkgPT4gKFxyXG4gIG1vZGFsRGF0YTogYW55XHJcbikgPT5cclxuICBzYW5jdHVhcnlDb25jYXQoXHJcbiAgICBleGNsdWRlc1ByaW1hcnlLZXkodGFibGVEYXRhLCBtb2RhbERhdGEsIHBrcywgZXJyTXNnKSxcclxuICAgIG9ubHlOb25QcmltYXJ5QWx0ZXJlZChtb2RhbERhdGEsIHBrcywgZXJyTXNnKVxyXG4gICk7XHJcblxyXG5jb25zdCBpc1VwZGF0ZSA9IFIuaWZFbHNlKFxyXG4gIFIucHJvcEVxKFwidHlwZVwiLCBcIlVwZGF0ZSBNYXBwaW5nXCIpLFxyXG4gIFJpZ2h0LFxyXG4gIFIuYWx3YXlzKExlZnQoW10pKVxyXG4pO1xyXG5cclxuY29uc3QgZ2V0VXBkYXRlciA9IHJlYWRlcihcclxuICAoe1xyXG4gICAgcGtzLFxyXG4gICAgZXJyTXNnLFxyXG4gICAgbW9kYWxEYXRhLFxyXG4gICAgdGFibGVEYXRhXHJcbiAgfToge1xyXG4gICAgcGtzOiBhbnk7XHJcbiAgICBlcnJNc2c6IHN0cmluZztcclxuICAgIG1vZGFsRGF0YTogYW55O1xyXG4gICAgdGFibGVEYXRhOiBhbnk7XHJcbiAgfSkgPT5cclxuICAgIFIucGlwZShcclxuICAgICAgaXNVcGRhdGUsXHJcbiAgICAgIFIuY2hhaW4oYWRkT3JVcGRhdGUodGFibGVEYXRhLCBwa3MsIGVyck1zZykpLFxyXG4gICAgICBSLm1hcCgobTogYW55KSA9PiBSLmFzc29jKFwibW9kXCIsIG0udHlwZSwgbS5yb3cpKSxcclxuICAgICAgUi5tYXAoUi5hc3NvYyhcIm9yaWdpbmFsXCIsIG1vZGFsRGF0YS5vcmlnLm9yaWdpbmFsIHx8IG1vZGFsRGF0YS5vcmlnKSksXHJcbiAgICAgIFIubWFwKHVwZGF0ZWQgPT5cclxuICAgICAgICBhbHRlck1hdGNoKFIuYWx3YXlzKHVwZGF0ZWQpLCB0YWJsZURhdGEsIG1vZGFsRGF0YS5vcmlnLCBwa3MpXHJcbiAgICAgIClcclxuICAgICkobW9kYWxEYXRhKVxyXG4pO1xyXG5cclxuY29uc3QgaXNBZGQgPSBSLmlmRWxzZShcclxuICBSLnByb3BFcShcInR5cGVcIiwgXCJBZGQgTWFwcGluZ1wiKSxcclxuICBSaWdodCxcclxuICBSLmFsd2F5cyhMZWZ0KFtdKSlcclxuKTtcclxuY29uc3QgZ2V0QWRkZXIgPSByZWFkZXIoXHJcbiAgKHtcclxuICAgIHBrcyxcclxuICAgIGVyck1zZyxcclxuICAgIG1vZGFsRGF0YSxcclxuICAgIHRhYmxlRGF0YVxyXG4gIH06IHtcclxuICAgIHBrczogYW55O1xyXG4gICAgZXJyTXNnOiBzdHJpbmc7XHJcbiAgICBtb2RhbERhdGE6IGFueTtcclxuICAgIHRhYmxlRGF0YTogYW55O1xyXG4gIH0pID0+XHJcbiAgICBSLnBpcGUoXHJcbiAgICAgIGlzQWRkLFxyXG4gICAgICBSLmNoYWluKHggPT4gZXhjbHVkZXNQcmltYXJ5S2V5KHRhYmxlRGF0YSwgeCwgcGtzLCBlcnJNc2cpKSxcclxuICAgICAgUi5tYXAoKG06IGFueSkgPT4gUi5hc3NvYyhcIm1vZFwiLCBtLnR5cGUsIG0ucm93KSksXHJcbiAgICAgIFIubWFwKHggPT4gUi5wcmVwZW5kKHgsIHRhYmxlRGF0YSkpXHJcbiAgICApKG1vZGFsRGF0YSlcclxuKTtcclxuY29uc3QgZ2V0TW9kaWZpZXJzID0gUi50cmF2ZXJzZTxhbnksIGFueSwgYW55PihyZWFkZXIub2YsIFIuaWRlbnRpdHksIFtcclxuICBnZXRVcGRhdGVyLFxyXG4gIGdldEFkZGVyXHJcbl0pLm1hcChSLmFwcGx5KGNvbmNhdCkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1pdENoYW5nZXNIZWxwZXIgPSAoe1xyXG4gIHBrcyxcclxuICBlcnJNc2csXHJcbiAgbW9kYWxEYXRhLFxyXG4gIHRhYmxlRGF0YVxyXG59OiB7XHJcbiAgcGtzOiBhbnk7XHJcbiAgZXJyTXNnOiBzdHJpbmc7XHJcbiAgbW9kYWxEYXRhOiBhbnk7XHJcbiAgdGFibGVEYXRhOiBhbnk7XHJcbn0pID0+XHJcbiAgZ2V0TW9kaWZpZXJzLnJ1bih7XHJcbiAgICBwa3MsXHJcbiAgICBlcnJNc2csXHJcbiAgICBtb2RhbERhdGEsXHJcbiAgICB0YWJsZURhdGFcclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbW1pdENoYW5nZXNIZWxwZXI7XHJcbiJdfQ==