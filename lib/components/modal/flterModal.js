"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./modal.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfigModal = function ConfigModal(_ref) {
  var open = _ref.open,
      id = _ref.id,
      title = _ref.title,
      headerClass = _ref.headerClass,
      bodyClass = _ref.bodyClass,
      footerClass = _ref.footerClass,
      closeModal = _ref.closeModal,
      modalBody = _ref.modalBody,
      clear = _ref.clear,
      filter = _ref.filter,
      disableFilter = _ref.disableFilter;
  return _react.default.createElement("div", {
    className: "modal ".concat(open ? "appear" : ""),
    id: id,
    role: "dialog",
    "aria-hidden": "true"
  }, _react.default.createElement("div", {
    className: open ? "modalOverlay" : "",
    onClick: closeModal
  }), _react.default.createElement("div", {
    className: "modal-dialog",
    role: "document"
  }, _react.default.createElement("div", {
    className: "modal-content"
  }, _react.default.createElement("div", {
    className: "modal-header ".concat(headerClass)
  }, _react.default.createElement("h5", {
    className: "modal-title"
  }, title)), _react.default.createElement("div", {
    className: "modal-body ".concat(bodyClass)
  }, modalBody), _react.default.createElement("div", {
    className: "modal-footer ".concat(footerClass)
  }, _react.default.createElement("button", {
    type: "button",
    className: "btn btn-default filter cancelFilter",
    onClick: closeModal
  }, "Cancel"), _react.default.createElement("button", {
    type: "button",
    className: "btn btn-danger filter clearFilter",
    onClick: clear
  }, "Clear"), _react.default.createElement("button", {
    type: "button",
    className: "btn btn-danger filter filterSubmit",
    onClick: filter,
    disabled: disableFilter
  }, "Filter")))));
};

var _default = ConfigModal;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFsL2ZsdGVyTW9kYWwudHN4Il0sIm5hbWVzIjpbIkNvbmZpZ01vZGFsIiwib3BlbiIsImlkIiwidGl0bGUiLCJoZWFkZXJDbGFzcyIsImJvZHlDbGFzcyIsImZvb3RlckNsYXNzIiwiY2xvc2VNb2RhbCIsIm1vZGFsQm9keSIsImNsZWFyIiwiZmlsdGVyIiwiZGlzYWJsZUZpbHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxNQUNsQkMsSUFEa0IsUUFDbEJBLElBRGtCO0FBQUEsTUFFbEJDLEVBRmtCLFFBRWxCQSxFQUZrQjtBQUFBLE1BR2xCQyxLQUhrQixRQUdsQkEsS0FIa0I7QUFBQSxNQUlsQkMsV0FKa0IsUUFJbEJBLFdBSmtCO0FBQUEsTUFLbEJDLFNBTGtCLFFBS2xCQSxTQUxrQjtBQUFBLE1BTWxCQyxXQU5rQixRQU1sQkEsV0FOa0I7QUFBQSxNQU9sQkMsVUFQa0IsUUFPbEJBLFVBUGtCO0FBQUEsTUFRbEJDLFNBUmtCLFFBUWxCQSxTQVJrQjtBQUFBLE1BU2xCQyxLQVRrQixRQVNsQkEsS0FUa0I7QUFBQSxNQVVsQkMsTUFWa0IsUUFVbEJBLE1BVmtCO0FBQUEsTUFXbEJDLGFBWGtCLFFBV2xCQSxhQVhrQjtBQUFBLFNBeUJsQjtBQUNFLElBQUEsU0FBUyxrQkFBV1YsSUFBSSxHQUFHLFFBQUgsR0FBYyxFQUE3QixDQURYO0FBRUUsSUFBQSxFQUFFLEVBQUVDLEVBRk47QUFHRSxJQUFBLElBQUksRUFBQyxRQUhQO0FBSUUsbUJBQVk7QUFKZCxLQU1FO0FBQUssSUFBQSxTQUFTLEVBQUVELElBQUksR0FBRyxjQUFILEdBQW9CLEVBQXhDO0FBQTRDLElBQUEsT0FBTyxFQUFFTTtBQUFyRCxJQU5GLEVBT0U7QUFBSyxJQUFBLFNBQVMsRUFBQyxjQUFmO0FBQThCLElBQUEsSUFBSSxFQUFDO0FBQW5DLEtBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxJQUFBLFNBQVMseUJBQWtCSCxXQUFsQjtBQUFkLEtBQ0U7QUFBSSxJQUFBLFNBQVMsRUFBQztBQUFkLEtBQTZCRCxLQUE3QixDQURGLENBREYsRUFJRTtBQUFLLElBQUEsU0FBUyx1QkFBZ0JFLFNBQWhCO0FBQWQsS0FBNENHLFNBQTVDLENBSkYsRUFLRTtBQUFLLElBQUEsU0FBUyx5QkFBa0JGLFdBQWxCO0FBQWQsS0FDRTtBQUNFLElBQUEsSUFBSSxFQUFDLFFBRFA7QUFFRSxJQUFBLFNBQVMsRUFBQyxxQ0FGWjtBQUdFLElBQUEsT0FBTyxFQUFFQztBQUhYLGNBREYsRUFRRTtBQUNFLElBQUEsSUFBSSxFQUFDLFFBRFA7QUFFRSxJQUFBLFNBQVMsRUFBQyxtQ0FGWjtBQUdFLElBQUEsT0FBTyxFQUFFRTtBQUhYLGFBUkYsRUFlRTtBQUNFLElBQUEsSUFBSSxFQUFDLFFBRFA7QUFFRSxJQUFBLFNBQVMsRUFBQyxvQ0FGWjtBQUdFLElBQUEsT0FBTyxFQUFFQyxNQUhYO0FBSUUsSUFBQSxRQUFRLEVBQUVDO0FBSlosY0FmRixDQUxGLENBREYsQ0FQRixDQXpCa0I7QUFBQSxDQUFwQjs7ZUFtRWVYLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vbW9kYWwuc2Nzc1wiO1xyXG5cclxuY29uc3QgQ29uZmlnTW9kYWwgPSAoe1xyXG4gIG9wZW4sXHJcbiAgaWQsXHJcbiAgdGl0bGUsXHJcbiAgaGVhZGVyQ2xhc3MsXHJcbiAgYm9keUNsYXNzLFxyXG4gIGZvb3RlckNsYXNzLFxyXG4gIGNsb3NlTW9kYWwsXHJcbiAgbW9kYWxCb2R5LFxyXG4gIGNsZWFyLFxyXG4gIGZpbHRlcixcclxuICBkaXNhYmxlRmlsdGVyXHJcbn06IHtcclxuICBvcGVuOiBib29sZWFuO1xyXG4gIGlkPzogc3RyaW5nO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIGhlYWRlckNsYXNzPzogc3RyaW5nO1xyXG4gIGJvZHlDbGFzcz86IHN0cmluZztcclxuICBmb290ZXJDbGFzcz86IHN0cmluZztcclxuICBjbG9zZU1vZGFsPzogYW55O1xyXG4gIG1vZGFsQm9keT86IEpTWC5FbGVtZW50O1xyXG4gIGNsZWFyOiBhbnk7XHJcbiAgZmlsdGVyOiBhbnk7XHJcbiAgZGlzYWJsZUZpbHRlcj86IGFueTtcclxufSkgPT4gKFxyXG4gIDxkaXZcclxuICAgIGNsYXNzTmFtZT17YG1vZGFsICR7b3BlbiA/IFwiYXBwZWFyXCIgOiBcIlwifWB9XHJcbiAgICBpZD17aWR9XHJcbiAgICByb2xlPVwiZGlhbG9nXCJcclxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e29wZW4gPyBcIm1vZGFsT3ZlcmxheVwiIDogXCJcIn0gb25DbGljaz17Y2xvc2VNb2RhbH0gLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbW9kYWwtaGVhZGVyICR7aGVhZGVyQ2xhc3N9YH0+XHJcbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57dGl0bGV9PC9oNT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1vZGFsLWJvZHkgJHtib2R5Q2xhc3N9YH0+e21vZGFsQm9keX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1vZGFsLWZvb3RlciAke2Zvb3RlckNsYXNzfWB9PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0IGZpbHRlciBjYW5jZWxGaWx0ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgZmlsdGVyIGNsZWFyRmlsdGVyXCJcclxuICAgICAgICAgICAgb25DbGljaz17Y2xlYXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENsZWFyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGZpbHRlciBmaWx0ZXJTdWJtaXRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtmaWx0ZXJ9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlRmlsdGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBGaWx0ZXJcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnTW9kYWw7XHJcbiJdfQ==