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
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? "arkModal" : _ref$id,
      title = _ref.title,
      modalClass = _ref.modalClass,
      headerClass = _ref.headerClass,
      bodyClass = _ref.bodyClass,
      footerClass = _ref.footerClass,
      closeModal = _ref.closeModal,
      modalBody = _ref.modalBody,
      modalFooter = _ref.modalFooter;
  return _react.default.createElement("div", {
    className: "modal ".concat(open ? "appear" : ""),
    id: id,
    role: "dialog",
    "aria-hidden": "true"
  }, _react.default.createElement("div", {
    className: open ? "modalOverlay" : "",
    onClick: closeModal
  }), _react.default.createElement("div", {
    className: "modal-dialog ".concat(modalClass),
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
  }, modalFooter))));
};

var _default = ConfigModal;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFsL21vZGFsLnRzeCJdLCJuYW1lcyI6WyJDb25maWdNb2RhbCIsIm9wZW4iLCJpZCIsInRpdGxlIiwibW9kYWxDbGFzcyIsImhlYWRlckNsYXNzIiwiYm9keUNsYXNzIiwiZm9vdGVyQ2xhc3MiLCJjbG9zZU1vZGFsIiwibW9kYWxCb2R5IiwibW9kYWxGb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFDbEJDLElBRGtCLFFBQ2xCQSxJQURrQjtBQUFBLHFCQUVsQkMsRUFGa0I7QUFBQSxNQUVsQkEsRUFGa0Isd0JBRWYsVUFGZTtBQUFBLE1BR2xCQyxLQUhrQixRQUdsQkEsS0FIa0I7QUFBQSxNQUlsQkMsVUFKa0IsUUFJbEJBLFVBSmtCO0FBQUEsTUFLbEJDLFdBTGtCLFFBS2xCQSxXQUxrQjtBQUFBLE1BTWxCQyxTQU5rQixRQU1sQkEsU0FOa0I7QUFBQSxNQU9sQkMsV0FQa0IsUUFPbEJBLFdBUGtCO0FBQUEsTUFRbEJDLFVBUmtCLFFBUWxCQSxVQVJrQjtBQUFBLE1BU2xCQyxTQVRrQixRQVNsQkEsU0FUa0I7QUFBQSxNQVVsQkMsV0FWa0IsUUFVbEJBLFdBVmtCO0FBQUEsU0F1QmxCO0FBQ0UsSUFBQSxTQUFTLGtCQUFXVCxJQUFJLEdBQUcsUUFBSCxHQUFjLEVBQTdCLENBRFg7QUFFRSxJQUFBLEVBQUUsRUFBRUMsRUFGTjtBQUdFLElBQUEsSUFBSSxFQUFDLFFBSFA7QUFJRSxtQkFBWTtBQUpkLEtBTUU7QUFBSyxJQUFBLFNBQVMsRUFBRUQsSUFBSSxHQUFHLGNBQUgsR0FBb0IsRUFBeEM7QUFBNEMsSUFBQSxPQUFPLEVBQUVPO0FBQXJELElBTkYsRUFPRTtBQUFLLElBQUEsU0FBUyx5QkFBa0JKLFVBQWxCLENBQWQ7QUFBOEMsSUFBQSxJQUFJLEVBQUM7QUFBbkQsS0FDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLElBQUEsU0FBUyx5QkFBa0JDLFdBQWxCO0FBQWQsS0FDRTtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsS0FBNkJGLEtBQTdCLENBREYsQ0FERixFQUlFO0FBQUssSUFBQSxTQUFTLHVCQUFnQkcsU0FBaEI7QUFBZCxLQUE0Q0csU0FBNUMsQ0FKRixFQUtFO0FBQUssSUFBQSxTQUFTLHlCQUFrQkYsV0FBbEI7QUFBZCxLQUFnREcsV0FBaEQsQ0FMRixDQURGLENBUEYsQ0F2QmtCO0FBQUEsQ0FBcEI7O2VBMENlVixXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuL21vZGFsLnNjc3NcIjtcclxuXHJcbmNvbnN0IENvbmZpZ01vZGFsID0gKHtcclxuICBvcGVuLFxyXG4gIGlkPVwiYXJrTW9kYWxcIixcclxuICB0aXRsZSxcclxuICBtb2RhbENsYXNzLFxyXG4gIGhlYWRlckNsYXNzLFxyXG4gIGJvZHlDbGFzcyxcclxuICBmb290ZXJDbGFzcyxcclxuICBjbG9zZU1vZGFsLFxyXG4gIG1vZGFsQm9keSxcclxuICBtb2RhbEZvb3RlclxyXG59OiB7XHJcbiAgb3BlbjogYm9vbGVhbjtcclxuICBpZD86IHN0cmluZztcclxuICB0aXRsZT86IHN0cmluZztcclxuICBtb2RhbENsYXNzPzogc3RyaW5nO1xyXG4gIGhlYWRlckNsYXNzPzogc3RyaW5nO1xyXG4gIGJvZHlDbGFzcz86IHN0cmluZztcclxuICBmb290ZXJDbGFzcz86IHN0cmluZztcclxuICBjbG9zZU1vZGFsPzogYW55O1xyXG4gIG1vZGFsQm9keT86IEpTWC5FbGVtZW50O1xyXG4gIG1vZGFsRm9vdGVyPzogSlNYLkVsZW1lbnQ7XHJcbn0pID0+IChcclxuICA8ZGl2XHJcbiAgICBjbGFzc05hbWU9e2Btb2RhbCAke29wZW4gPyBcImFwcGVhclwiIDogXCJcIn1gfVxyXG4gICAgaWQ9e2lkfVxyXG4gICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gID5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtvcGVuID8gXCJtb2RhbE92ZXJsYXlcIiA6IFwiXCJ9IG9uQ2xpY2s9e2Nsb3NlTW9kYWx9IC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YG1vZGFsLWRpYWxvZyAke21vZGFsQ2xhc3N9YH0gcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbW9kYWwtaGVhZGVyICR7aGVhZGVyQ2xhc3N9YH0+XHJcbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57dGl0bGV9PC9oNT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1vZGFsLWJvZHkgJHtib2R5Q2xhc3N9YH0+e21vZGFsQm9keX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1vZGFsLWZvb3RlciAke2Zvb3RlckNsYXNzfWB9Pnttb2RhbEZvb3Rlcn08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmZpZ01vZGFsO1xyXG4iXX0=