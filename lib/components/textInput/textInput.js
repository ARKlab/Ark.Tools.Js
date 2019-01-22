"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var R = _interopRequireWildcard(require("ramda"));

var _recompose = require("recompose");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OnlyLabelName = function OnlyLabelName(_ref) {
  var labelName = _ref.labelName;
  return _react.default.createElement("label", {
    htmlFor: "select"
  }, _react.default.createElement("b", null, labelName));
};

var RequiredLabelName = function RequiredLabelName(_ref2) {
  var labelName = _ref2.labelName,
      requiredFieldText = _ref2.requiredFieldText;
  return _react.default.createElement("label", {
    htmlFor: "select"
  }, _react.default.createElement("div", {
    className: "requiredLabel"
  }, _react.default.createElement("div", null, labelName), _react.default.createElement("div", {
    className: "required"
  }, requiredFieldText)));
};

var NumericInput = function NumericInput(_ref3) {
  var value = _ref3.value,
      change = _ref3.change,
      _ref3$inputClassName = _ref3.inputClassName,
      inputClassName = _ref3$inputClassName === void 0 ? "" : _ref3$inputClassName,
      _ref3$id = _ref3.id,
      id = _ref3$id === void 0 ? "arkTextInput" : _ref3$id,
      labelName = _ref3.labelName,
      _ref3$readOnly = _ref3.readOnly,
      readOnly = _ref3$readOnly === void 0 ? false : _ref3$readOnly,
      _ref3$disabled = _ref3.disabled,
      disabled = _ref3$disabled === void 0 ? false : _ref3$disabled,
      _ref3$autoComplete = _ref3.autoComplete,
      autoComplete = _ref3$autoComplete === void 0 ? "on" : _ref3$autoComplete,
      requiredFieldText = _ref3.requiredFieldText,
      _ref3$placeholder = _ref3.placeholder,
      placeholder = _ref3$placeholder === void 0 ? "" : _ref3$placeholder;
  return _react.default.createElement("div", null, !R.isEmpty(labelName) && R.isEmpty(requiredFieldText) ? _react.default.createElement(OnlyLabelName, {
    labelName: labelName
  }) : null, !R.isEmpty(labelName) && !R.isEmpty(requiredFieldText) ? _react.default.createElement(RequiredLabelName, {
    labelName: labelName,
    requiredFieldText: requiredFieldText
  }) : null, _react.default.createElement("input", {
    type: "text",
    className: "form-control textInput ".concat(inputClassName, " ").concat(disabled || readOnly ? "disabled" : ""),
    value: value,
    placeholder: placeholder,
    id: id,
    readOnly: readOnly,
    autoComplete: autoComplete,
    disabled: disabled,
    onChange: change
  }));
};

var _default = (0, _recompose.compose)((0, _recompose.withHandlers)({
  change: function change(_ref4) {
    var update = _ref4.update;
    return function (e) {
      return update(e.target.value);
    };
  }
}))(NumericInput);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RleHRJbnB1dC90ZXh0SW5wdXQudHN4Il0sIm5hbWVzIjpbIk9ubHlMYWJlbE5hbWUiLCJsYWJlbE5hbWUiLCJSZXF1aXJlZExhYmVsTmFtZSIsInJlcXVpcmVkRmllbGRUZXh0IiwiTnVtZXJpY0lucHV0IiwidmFsdWUiLCJjaGFuZ2UiLCJpbnB1dENsYXNzTmFtZSIsImlkIiwicmVhZE9ubHkiLCJkaXNhYmxlZCIsImF1dG9Db21wbGV0ZSIsInBsYWNlaG9sZGVyIiwiUiIsImlzRW1wdHkiLCJ1cGRhdGUiLCJlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxNQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxTQUNwQjtBQUFPLElBQUEsT0FBTyxFQUFDO0FBQWYsS0FDRSx3Q0FBSUEsU0FBSixDQURGLENBRG9CO0FBQUEsQ0FBdEI7O0FBS0EsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLE1BQ3hCRCxTQUR3QixTQUN4QkEsU0FEd0I7QUFBQSxNQUV4QkUsaUJBRndCLFNBRXhCQSxpQkFGd0I7QUFBQSxTQU94QjtBQUFPLElBQUEsT0FBTyxFQUFDO0FBQWYsS0FDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRSwwQ0FBTUYsU0FBTixDQURGLEVBRUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQTJCRSxpQkFBM0IsQ0FGRixDQURGLENBUHdCO0FBQUEsQ0FBMUI7O0FBZ0NBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsTUFDbkJDLEtBRG1CLFNBQ25CQSxLQURtQjtBQUFBLE1BRW5CQyxNQUZtQixTQUVuQkEsTUFGbUI7QUFBQSxtQ0FHbkJDLGNBSG1CO0FBQUEsTUFHbkJBLGNBSG1CLHFDQUdGLEVBSEU7QUFBQSx1QkFJbkJDLEVBSm1CO0FBQUEsTUFJbkJBLEVBSm1CLHlCQUlkLGNBSmM7QUFBQSxNQUtuQlAsU0FMbUIsU0FLbkJBLFNBTG1CO0FBQUEsNkJBTW5CUSxRQU5tQjtBQUFBLE1BTW5CQSxRQU5tQiwrQkFNUixLQU5RO0FBQUEsNkJBT25CQyxRQVBtQjtBQUFBLE1BT25CQSxRQVBtQiwrQkFPUixLQVBRO0FBQUEsaUNBUW5CQyxZQVJtQjtBQUFBLE1BUW5CQSxZQVJtQixtQ0FRSixJQVJJO0FBQUEsTUFTbkJSLGlCQVRtQixTQVNuQkEsaUJBVG1CO0FBQUEsZ0NBVW5CUyxXQVZtQjtBQUFBLE1BVW5CQSxXQVZtQixrQ0FVTCxFQVZLO0FBQUEsU0FZbkIsMENBQ0csQ0FBQ0MsQ0FBQyxDQUFDQyxPQUFGLENBQVViLFNBQVYsQ0FBRCxJQUF5QlksQ0FBQyxDQUFDQyxPQUFGLENBQVVYLGlCQUFWLENBQXpCLEdBQ0MsNkJBQUMsYUFBRDtBQUFlLElBQUEsU0FBUyxFQUFFRjtBQUExQixJQURELEdBRUcsSUFITixFQUlHLENBQUNZLENBQUMsQ0FBQ0MsT0FBRixDQUFVYixTQUFWLENBQUQsSUFBeUIsQ0FBQ1ksQ0FBQyxDQUFDQyxPQUFGLENBQVVYLGlCQUFWLENBQTFCLEdBQ0MsNkJBQUMsaUJBQUQ7QUFDRSxJQUFBLFNBQVMsRUFBRUYsU0FEYjtBQUVFLElBQUEsaUJBQWlCLEVBQUVFO0FBRnJCLElBREQsR0FLRyxJQVROLEVBVUU7QUFDRSxJQUFBLElBQUksRUFBQyxNQURQO0FBRUUsSUFBQSxTQUFTLG1DQUE0QkksY0FBNUIsY0FDUEcsUUFBUSxJQUFJRCxRQUFaLEdBQXVCLFVBQXZCLEdBQW9DLEVBRDdCLENBRlg7QUFLRSxJQUFBLEtBQUssRUFBRUosS0FMVDtBQU1FLElBQUEsV0FBVyxFQUFFTyxXQU5mO0FBT0UsSUFBQSxFQUFFLEVBQUVKLEVBUE47QUFRRSxJQUFBLFFBQVEsRUFBRUMsUUFSWjtBQVNFLElBQUEsWUFBWSxFQUFFRSxZQVRoQjtBQVVFLElBQUEsUUFBUSxFQUFFRCxRQVZaO0FBV0UsSUFBQSxRQUFRLEVBQUVKO0FBWFosSUFWRixDQVptQjtBQUFBLENBQXJCOztlQXNDZSx3QkFDYiw2QkFBYTtBQUNYQSxFQUFBQSxNQUFNLEVBQUU7QUFBQSxRQUFHUyxNQUFILFNBQUdBLE1BQUg7QUFBQSxXQUFpQyxVQUFDQyxDQUFEO0FBQUEsYUFBWUQsTUFBTSxDQUFDQyxDQUFDLENBQUNDLE1BQUYsQ0FBU1osS0FBVixDQUFsQjtBQUFBLEtBQWpDO0FBQUE7QUFERyxDQUFiLENBRGEsRUFJYkQsWUFKYSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBSIGZyb20gXCJyYW1kYVwiO1xyXG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoSGFuZGxlcnMgfSBmcm9tIFwicmVjb21wb3NlXCI7XHJcblxyXG5jb25zdCBPbmx5TGFiZWxOYW1lID0gKHsgbGFiZWxOYW1lIH06IHsgbGFiZWxOYW1lPzogc3RyaW5nIH0pID0+IChcclxuICA8bGFiZWwgaHRtbEZvcj1cInNlbGVjdFwiPlxyXG4gICAgPGI+e2xhYmVsTmFtZX08L2I+XHJcbiAgPC9sYWJlbD5cclxuKTtcclxuY29uc3QgUmVxdWlyZWRMYWJlbE5hbWUgPSAoe1xyXG4gIGxhYmVsTmFtZSxcclxuICByZXF1aXJlZEZpZWxkVGV4dFxyXG59OiB7XHJcbiAgbGFiZWxOYW1lPzogc3RyaW5nO1xyXG4gIHJlcXVpcmVkRmllbGRUZXh0Pzogc3RyaW5nO1xyXG59KSA9PiAoXHJcbiAgPGxhYmVsIGh0bWxGb3I9XCJzZWxlY3RcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVxdWlyZWRMYWJlbFwiPlxyXG4gICAgICA8ZGl2PntsYWJlbE5hbWV9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVxdWlyZWRcIj57cmVxdWlyZWRGaWVsZFRleHR9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2xhYmVsPlxyXG4pO1xyXG5cclxuZXhwb3J0IHR5cGUgSW5wdXRQcm9wcyA9IHtcclxuICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIHVwZGF0ZTogYW55O1xyXG4gIGlucHV0Q2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGlkPzogc3RyaW5nO1xyXG4gIGxhYmVsTmFtZT86IHN0cmluZztcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xyXG4gIGF1dG9Db21wbGV0ZT86IHN0cmluZztcclxuICByZXF1aXJlZEZpZWxkVGV4dD86IHN0cmluZztcclxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIE91dHB1dFByb3BzID0gSW5wdXRQcm9wcyAmIHtcclxuICBjaGFuZ2U6IGFueTtcclxufTtcclxuXHJcbmNvbnN0IE51bWVyaWNJbnB1dCA9ICh7XHJcbiAgdmFsdWUsXHJcbiAgY2hhbmdlLFxyXG4gIGlucHV0Q2xhc3NOYW1lID0gXCJcIixcclxuICBpZCA9IFwiYXJrVGV4dElucHV0XCIsXHJcbiAgbGFiZWxOYW1lLFxyXG4gIHJlYWRPbmx5ID0gZmFsc2UsXHJcbiAgZGlzYWJsZWQgPSBmYWxzZSxcclxuICBhdXRvQ29tcGxldGUgPSBcIm9uXCIsXHJcbiAgcmVxdWlyZWRGaWVsZFRleHQsXHJcbiAgcGxhY2Vob2xkZXIgPSBcIlwiXHJcbn06IE91dHB1dFByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIHshUi5pc0VtcHR5KGxhYmVsTmFtZSkgJiYgUi5pc0VtcHR5KHJlcXVpcmVkRmllbGRUZXh0KSA/IChcclxuICAgICAgPE9ubHlMYWJlbE5hbWUgbGFiZWxOYW1lPXtsYWJlbE5hbWV9IC8+XHJcbiAgICApIDogbnVsbH1cclxuICAgIHshUi5pc0VtcHR5KGxhYmVsTmFtZSkgJiYgIVIuaXNFbXB0eShyZXF1aXJlZEZpZWxkVGV4dCkgPyAoXHJcbiAgICAgIDxSZXF1aXJlZExhYmVsTmFtZVxyXG4gICAgICAgIGxhYmVsTmFtZT17bGFiZWxOYW1lfVxyXG4gICAgICAgIHJlcXVpcmVkRmllbGRUZXh0PXtyZXF1aXJlZEZpZWxkVGV4dH1cclxuICAgICAgLz5cclxuICAgICkgOiBudWxsfVxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIHRleHRJbnB1dCAke2lucHV0Q2xhc3NOYW1lfSAke1xyXG4gICAgICAgIGRpc2FibGVkIHx8IHJlYWRPbmx5ID8gXCJkaXNhYmxlZFwiIDogXCJcIlxyXG4gICAgICB9YH1cclxuICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgIGlkPXtpZH1cclxuICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxyXG4gICAgICBhdXRvQ29tcGxldGU9e2F1dG9Db21wbGV0ZX1cclxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICBvbkNoYW5nZT17Y2hhbmdlfVxyXG4gICAgLz5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2U8T3V0cHV0UHJvcHMsIElucHV0UHJvcHM+KFxyXG4gIHdpdGhIYW5kbGVycyh7XHJcbiAgICBjaGFuZ2U6ICh7IHVwZGF0ZSB9OiB7IHVwZGF0ZTogYW55IH0pID0+IChlOiBhbnkpID0+IHVwZGF0ZShlLnRhcmdldC52YWx1ZSlcclxuICB9KVxyXG4pKE51bWVyaWNJbnB1dCk7XHJcbiJdfQ==