"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.excelBuilder = void 0;

var R = _interopRequireWildcard(require("ramda"));

var _helper = require("./helper");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var excelBuilder = function excelBuilder(_ref3) {
  var prev = _ref3.prev,
      curr = _ref3.curr,
      list = _ref3.list,
      fileName = _ref3.fileName;
  return R.pipe(mapData, function (data) {
    return (0, _helper.downloadExcel)({
      data: data,
      fileName: fileName
    });
  })({
    prev: prev,
    curr: curr,
    list: list
  });
};

exports.excelBuilder = excelBuilder;
var _default = excelBuilder;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9kaWZmL2RpZmZFeGNlbEJ1aWxkZXIudHMiXSwibmFtZXMiOlsiY3JlYXRlRXhjZWxSb3ciLCJwcmV2aW91cyIsImN1cnJlbnQiLCJsaXN0IiwidmFsIiwibWFwIiwieCIsInB1c2giLCJjb2xOYW1lIiwiUiIsInByb3AiLCJwcm9wTmFtZSIsInBpcGUiLCJmcm9tUGFpcnMiLCJuaWxDaGVjayIsImFyciIsImluZGV4IiwiaXNOaWwiLCJtYXBEYXRhIiwicHJldiIsImN1cnIiLCJsZW5ndGgiLCJpIiwiZXhjZWxCdWlsZGVyIiwiZmlsZU5hbWUiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BUWpCO0FBQUEsTUFQSkMsUUFPSSxRQVBKQSxRQU9JO0FBQUEsTUFOSkMsT0FNSSxRQU5KQSxPQU1JO0FBQUEsTUFMSkMsSUFLSSxRQUxKQSxJQUtJO0FBQ0osTUFBSUMsR0FBUSxHQUFHLEVBQWY7QUFDQUQsRUFBQUEsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQ0MsQ0FBRCxFQUFZO0FBQ25CRixJQUFBQSxHQUFHLENBQUNHLElBQUosQ0FBUyxvQkFBYUQsQ0FBQyxDQUFDRSxPQUFmLEdBQTBCQyxDQUFDLENBQUNDLElBQUYsQ0FBT0osQ0FBQyxDQUFDSyxRQUFULEVBQW1CVixRQUFuQixDQUExQixDQUFUO0FBQ0QsR0FGRDtBQUdBRyxFQUFBQSxHQUFHLENBQUNHLElBQUosQ0FBUyxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQVQ7QUFDQUosRUFBQUEsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQ0MsQ0FBRDtBQUFBLFdBQ1BGLEdBQUcsQ0FBQ0csSUFBSixDQUFTLG1CQUFZRCxDQUFDLENBQUNFLE9BQWQsR0FBeUJDLENBQUMsQ0FBQ0MsSUFBRixDQUFPSixDQUFDLENBQUNLLFFBQVQsRUFBbUJULE9BQW5CLENBQXpCLENBQVQsQ0FETztBQUFBLEdBQVQ7QUFJQSxTQUFPTyxDQUFDLENBQUNHLElBQUYsQ0FBaUJILENBQUMsQ0FBQ0ksU0FBbkIsRUFBOEJULEdBQTlCLENBQVA7QUFDRCxDQW5CRDs7QUFxQkEsSUFBTVUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsR0FBRCxFQUFXQyxLQUFYO0FBQUEsU0FDZlAsQ0FBQyxDQUFDUSxLQUFGLENBQVFGLEdBQUcsQ0FBQ0MsS0FBRCxDQUFYLElBQXNCLEVBQXRCLEdBQTJCRCxHQUFHLENBQUNDLEtBQUQsQ0FEZjtBQUFBLENBQWpCOztBQUdBLElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsTUFBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsTUFBU0MsSUFBVCxTQUFTQSxJQUFUO0FBQUEsTUFBZWpCLElBQWYsU0FBZUEsSUFBZjtBQUFBLFNBQ2RNLENBQUMsQ0FBQ1ksTUFBRixDQUFTRixJQUFULElBQWlCVixDQUFDLENBQUNZLE1BQUYsQ0FBU0QsSUFBVCxDQUFqQixHQUNJRCxJQUFJLENBQUNkLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQVNnQixDQUFUO0FBQUEsV0FDUHRCLGNBQWMsQ0FBQztBQUNiQyxNQUFBQSxRQUFRLEVBQUVhLFFBQVEsQ0FBQ0ssSUFBRCxFQUFPRyxDQUFQLENBREw7QUFFYnBCLE1BQUFBLE9BQU8sRUFBRVksUUFBUSxDQUFDTSxJQUFELEVBQU9FLENBQVAsQ0FGSjtBQUdibkIsTUFBQUEsSUFBSSxFQUFKQTtBQUhhLEtBQUQsQ0FEUDtBQUFBLEdBQVQsQ0FESixHQVFJaUIsSUFBSSxDQUFDZixHQUFMLENBQVMsVUFBQ0MsQ0FBRCxFQUFTZ0IsQ0FBVDtBQUFBLFdBQ1B0QixjQUFjLENBQUM7QUFDYkMsTUFBQUEsUUFBUSxFQUFFYSxRQUFRLENBQUNLLElBQUQsRUFBT0csQ0FBUCxDQURMO0FBRWJwQixNQUFBQSxPQUFPLEVBQUVZLFFBQVEsQ0FBQ00sSUFBRCxFQUFPRSxDQUFQLENBRko7QUFHYm5CLE1BQUFBLElBQUksRUFBSkE7QUFIYSxLQUFELENBRFA7QUFBQSxHQUFULENBVFU7QUFBQSxDQUFoQjs7QUFpQk8sSUFBTW9CLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsTUFDMUJKLElBRDBCLFNBQzFCQSxJQUQwQjtBQUFBLE1BRTFCQyxJQUYwQixTQUUxQkEsSUFGMEI7QUFBQSxNQUcxQmpCLElBSDBCLFNBRzFCQSxJQUgwQjtBQUFBLE1BSTFCcUIsUUFKMEIsU0FJMUJBLFFBSjBCO0FBQUEsU0FXMUJmLENBQUMsQ0FBQ0csSUFBRixDQUNFTSxPQURGLEVBRUUsVUFBQ08sSUFBRDtBQUFBLFdBQWUsMkJBQWM7QUFBRUEsTUFBQUEsSUFBSSxFQUFKQSxJQUFGO0FBQVFELE1BQUFBLFFBQVEsRUFBUkE7QUFBUixLQUFkLENBQWY7QUFBQSxHQUZGLEVBR0U7QUFDQUwsSUFBQUEsSUFBSSxFQUFKQSxJQURBO0FBRUFDLElBQUFBLElBQUksRUFBSkEsSUFGQTtBQUdBakIsSUFBQUEsSUFBSSxFQUFKQTtBQUhBLEdBSEYsQ0FYMEI7QUFBQSxDQUFyQjs7O2VBb0JRb0IsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFIgZnJvbSBcInJhbWRhXCI7XHJcbmltcG9ydCB7IGRvd25sb2FkRXhjZWwgfSBmcm9tIFwiLi9oZWxwZXJcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZUV4Y2VsUm93ID0gKHtcclxuICBwcmV2aW91cyxcclxuICBjdXJyZW50LFxyXG4gIGxpc3RcclxufToge1xyXG4gIHByZXZpb3VzOiBhbnk7XHJcbiAgY3VycmVudDogYW55O1xyXG4gIGxpc3Q6IGFueTtcclxufSkgPT4ge1xyXG4gIGxldCB2YWw6IGFueSA9IFtdO1xyXG4gIGxpc3QubWFwKCh4OiBhbnkpID0+IHtcclxuICAgIHZhbC5wdXNoKFtgUHJldmlvdXMgJHt4LmNvbE5hbWV9YCwgUi5wcm9wKHgucHJvcE5hbWUsIHByZXZpb3VzKV0pO1xyXG4gIH0pO1xyXG4gIHZhbC5wdXNoKFtcIlwiLCBcIlwiXSk7XHJcbiAgbGlzdC5tYXAoKHg6IGFueSkgPT5cclxuICAgIHZhbC5wdXNoKFtgQ3VycmVudCAke3guY29sTmFtZX1gLCBSLnByb3AoeC5wcm9wTmFtZSwgY3VycmVudCldKVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBSLnBpcGU8YW55LCBhbnk+KFIuZnJvbVBhaXJzKSh2YWwpO1xyXG59O1xyXG5cclxuY29uc3QgbmlsQ2hlY2sgPSAoYXJyOiBhbnksIGluZGV4OiBudW1iZXIpID0+XHJcbiAgUi5pc05pbChhcnJbaW5kZXhdKSA/IHt9IDogYXJyW2luZGV4XTtcclxuXHJcbmNvbnN0IG1hcERhdGEgPSAoeyBwcmV2LCBjdXJyLCBsaXN0IH06IHsgcHJldjogYW55OyBjdXJyOiBhbnk7IGxpc3Q6IGFueSB9KSA9PlxyXG4gIFIubGVuZ3RoKHByZXYpID4gUi5sZW5ndGgoY3VycilcclxuICAgID8gcHJldi5tYXAoKHg6IGFueSwgaTogbnVtYmVyKSA9PlxyXG4gICAgICAgIGNyZWF0ZUV4Y2VsUm93KHtcclxuICAgICAgICAgIHByZXZpb3VzOiBuaWxDaGVjayhwcmV2LCBpKSxcclxuICAgICAgICAgIGN1cnJlbnQ6IG5pbENoZWNrKGN1cnIsIGkpLFxyXG4gICAgICAgICAgbGlzdFxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgIDogY3Vyci5tYXAoKHg6IGFueSwgaTogbnVtYmVyKSA9PlxyXG4gICAgICAgIGNyZWF0ZUV4Y2VsUm93KHtcclxuICAgICAgICAgIHByZXZpb3VzOiBuaWxDaGVjayhwcmV2LCBpKSxcclxuICAgICAgICAgIGN1cnJlbnQ6IG5pbENoZWNrKGN1cnIsIGkpLFxyXG4gICAgICAgICAgbGlzdFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcblxyXG5leHBvcnQgY29uc3QgZXhjZWxCdWlsZGVyID0gKHtcclxuICBwcmV2LFxyXG4gIGN1cnIsXHJcbiAgbGlzdCxcclxuICBmaWxlTmFtZVxyXG59OiB7XHJcbiAgcHJldjogYW55O1xyXG4gIGN1cnI6IGFueTtcclxuICBsaXN0OiBhbnk7XHJcbiAgZmlsZU5hbWU6IHN0cmluZztcclxufSkgPT5cclxuICBSLnBpcGUoXHJcbiAgICBtYXBEYXRhLFxyXG4gICAgKGRhdGE6IGFueSkgPT4gZG93bmxvYWRFeGNlbCh7IGRhdGEsIGZpbGVOYW1lIH0pXHJcbiAgKSh7XHJcbiAgICBwcmV2LFxyXG4gICAgY3VycixcclxuICAgIGxpc3RcclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV4Y2VsQnVpbGRlcjtcclxuIl19