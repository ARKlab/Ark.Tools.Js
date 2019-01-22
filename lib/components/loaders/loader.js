"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./loader.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader(_ref) {
  var load = _ref.load,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? "arkLoader" : _ref$id,
      loadIcon = _ref.loadIcon;
  return _react.default.createElement("div", {
    className: "loadOverlay ".concat(load ? "spin" : ""),
    id: id
  }, _react.default.createElement("div", {
    className: "loadContainer"
  }, _react.default.createElement("i", {
    className: loadIcon
  })));
};

var _default = Loader;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2xvYWRlcnMvbG9hZGVyLnRzeCJdLCJuYW1lcyI6WyJMb2FkZXIiLCJsb2FkIiwiaWQiLCJsb2FkSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxNQUNiQyxJQURhLFFBQ2JBLElBRGE7QUFBQSxxQkFFYkMsRUFGYTtBQUFBLE1BRWJBLEVBRmEsd0JBRVYsV0FGVTtBQUFBLE1BR2JDLFFBSGEsUUFHYkEsUUFIYTtBQUFBLFNBU2I7QUFBSyxJQUFBLFNBQVMsd0JBQWlCRixJQUFJLEdBQUcsTUFBSCxHQUFZLEVBQWpDLENBQWQ7QUFBcUQsSUFBQSxFQUFFLEVBQUVDO0FBQXpELEtBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0U7QUFBRyxJQUFBLFNBQVMsRUFBRUM7QUFBZCxJQURGLENBREYsQ0FUYTtBQUFBLENBQWY7O2VBZ0JlSCxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuL2xvYWRlci5zY3NzXCI7XHJcblxyXG5jb25zdCBMb2FkZXIgPSAoe1xyXG4gIGxvYWQsXHJcbiAgaWQ9XCJhcmtMb2FkZXJcIixcclxuICBsb2FkSWNvblxyXG59OiB7XHJcbiAgbG9hZDogYm9vbGVhbjtcclxuICBpZDogc3RyaW5nO1xyXG4gIGxvYWRJY29uOiBzdHJpbmc7XHJcbn0pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT17YGxvYWRPdmVybGF5ICR7bG9hZCA/IFwic3BpblwiIDogXCJcIn1gfSBpZD17aWR9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkQ29udGFpbmVyXCI+XHJcbiAgICAgIDxpIGNsYXNzTmFtZT17bG9hZEljb259IC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcclxuIl19