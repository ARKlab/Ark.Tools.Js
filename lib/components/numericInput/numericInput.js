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
      id = _ref3$id === void 0 ? "arkNumberInput" : _ref3$id,
      _ref3$labelName = _ref3.labelName,
      labelName = _ref3$labelName === void 0 ? "" : _ref3$labelName,
      _ref3$readOnly = _ref3.readOnly,
      readOnly = _ref3$readOnly === void 0 ? false : _ref3$readOnly,
      _ref3$disabled = _ref3.disabled,
      disabled = _ref3$disabled === void 0 ? false : _ref3$disabled,
      _ref3$autoComplete = _ref3.autoComplete,
      autoComplete = _ref3$autoComplete === void 0 ? "on" : _ref3$autoComplete,
      _ref3$step = _ref3.step,
      step = _ref3$step === void 0 ? "1" : _ref3$step,
      min = _ref3.min,
      max = _ref3.max,
      _ref3$requiredFieldTe = _ref3.requiredFieldText,
      requiredFieldText = _ref3$requiredFieldTe === void 0 ? "" : _ref3$requiredFieldTe,
      _ref3$placeholder = _ref3.placeholder,
      placeholder = _ref3$placeholder === void 0 ? "" : _ref3$placeholder;
  return _react.default.createElement("div", null, !R.isEmpty(labelName) && R.isEmpty(requiredFieldText) ? _react.default.createElement(OnlyLabelName, {
    labelName: labelName
  }) : null, !R.isEmpty(labelName) && !R.isEmpty(requiredFieldText) ? _react.default.createElement(RequiredLabelName, {
    labelName: labelName,
    requiredFieldText: requiredFieldText
  }) : null, _react.default.createElement("input", {
    type: "number",
    className: "form-control arkNumberInput ".concat(inputClassName, " ").concat(disabled || readOnly ? "disabled" : ""),
    value: value,
    placeholder: placeholder,
    id: id,
    readOnly: readOnly,
    max: max,
    min: min,
    step: step,
    autoComplete: autoComplete,
    disabled: disabled,
    onChange: change
  }));
};

var _default = (0, _recompose.compose)((0, _recompose.withHandlers)({
  change: function change(_ref4) {
    var update = _ref4.update,
        max = _ref4.max,
        min = _ref4.min;
    return function (e) {
      var val = e.target.value;

      if (min !== undefined || max !== undefined) {
        var minTest = min !== undefined && parseFloat(val) < min;
        var maxTest = max !== undefined && parseFloat(val) > max;
        debugger;
        return R.any(R.equals(true))([minTest, maxTest]) ? update("") : update(val);
      }

      return update(val);
    };
  }
}))(NumericInput);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL251bWVyaWNJbnB1dC9udW1lcmljSW5wdXQudHN4Il0sIm5hbWVzIjpbIk9ubHlMYWJlbE5hbWUiLCJsYWJlbE5hbWUiLCJSZXF1aXJlZExhYmVsTmFtZSIsInJlcXVpcmVkRmllbGRUZXh0IiwiTnVtZXJpY0lucHV0IiwidmFsdWUiLCJjaGFuZ2UiLCJpbnB1dENsYXNzTmFtZSIsImlkIiwicmVhZE9ubHkiLCJkaXNhYmxlZCIsImF1dG9Db21wbGV0ZSIsInN0ZXAiLCJtaW4iLCJtYXgiLCJwbGFjZWhvbGRlciIsIlIiLCJpc0VtcHR5IiwidXBkYXRlIiwiZSIsInZhbCIsInRhcmdldCIsInVuZGVmaW5lZCIsIm1pblRlc3QiLCJwYXJzZUZsb2F0IiwibWF4VGVzdCIsImFueSIsImVxdWFscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsTUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsU0FDcEI7QUFBTyxJQUFBLE9BQU8sRUFBQztBQUFmLEtBQ0Usd0NBQUlBLFNBQUosQ0FERixDQURvQjtBQUFBLENBQXRCOztBQUtBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxNQUN4QkQsU0FEd0IsU0FDeEJBLFNBRHdCO0FBQUEsTUFFeEJFLGlCQUZ3QixTQUV4QkEsaUJBRndCO0FBQUEsU0FPeEI7QUFBTyxJQUFBLE9BQU8sRUFBQztBQUFmLEtBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0UsMENBQU1GLFNBQU4sQ0FERixFQUVFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUEyQkUsaUJBQTNCLENBRkYsQ0FERixDQVB3QjtBQUFBLENBQTFCOztBQW1DQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLE1BQ25CQyxLQURtQixTQUNuQkEsS0FEbUI7QUFBQSxNQUVuQkMs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QUNFLEdBQUQsQ0FGVjtBQUdEOztBQUNELGFBQU9GLE1BQU0sQ0FBQ0UsR0FBRCxDQUFiO0FBQ0QsS0FuQk87QUFBQTtBQURHLENBQWIsQ0FEYSxFQXVCYmhCLFlBdkJhLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFIgZnJvbSBcInJhbWRhXCI7XHJcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhIYW5kbGVycyB9IGZyb20gXCJyZWNvbXBvc2VcIjtcclxuXHJcbmNvbnN0IE9ubHlMYWJlbE5hbWUgPSAoeyBsYWJlbE5hbWUgfTogeyBsYWJlbE5hbWU/OiBzdHJpbmcgfSkgPT4gKFxyXG4gIDxsYWJlbCBodG1sRm9yPVwic2VsZWN0XCI+XHJcbiAgICA8Yj57bGFiZWxOYW1lfTwvYj5cclxuICA8L2xhYmVsPlxyXG4pO1xyXG5jb25zdCBSZXF1aXJlZExhYmVsTmFtZSA9ICh7XHJcbiAgbGFiZWxOYW1lLFxyXG4gIHJlcXVpcmVkRmllbGRUZXh0XHJcbn06IHtcclxuICBsYWJlbE5hbWU/OiBzdHJpbmc7XHJcbiAgcmVxdWlyZWRGaWVsZFRleHQ/OiBzdHJpbmc7XHJcbn0pID0+IChcclxuICA8bGFiZWwgaHRtbEZvcj1cInNlbGVjdFwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZXF1aXJlZExhYmVsXCI+XHJcbiAgICAgIDxkaXY+e2xhYmVsTmFtZX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPntyZXF1aXJlZEZpZWxkVGV4dH08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbGFiZWw+XHJcbik7XHJcblxyXG5leHBvcnQgdHlwZSBJbnB1dFByb3BzID0ge1xyXG4gIHZhbHVlOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgdXBkYXRlOiBhbnk7XHJcbiAgaW5wdXRDbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgaWQ/OiBzdHJpbmc7XHJcbiAgbGFiZWxOYW1lPzogc3RyaW5nO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICByZWFkT25seT86IGJvb2xlYW47XHJcbiAgYXV0b0NvbXBsZXRlPzogc3RyaW5nO1xyXG4gIHJlcXVpcmVkRmllbGRUZXh0Pzogc3RyaW5nO1xyXG4gIHN0ZXA/OiBzdHJpbmc7XHJcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgbWF4PzogbnVtYmVyO1xyXG4gIG1pbj86IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIE91dHB1dFByb3BzID0gSW5wdXRQcm9wcyAmIHtcclxuICBjaGFuZ2U6IGFueTtcclxufTtcclxuXHJcbmNvbnN0IE51bWVyaWNJbnB1dCA9ICh7XHJcbiAgdmFsdWUsXHJcbiAgY2hhbmdlLFxyXG4gIGlucHV0Q2xhc3NOYW1lID0gXCJcIixcclxuICBpZCA9IFwiYXJrTnVtYmVySW5wdXRcIixcclxuICBsYWJlbE5hbWUgPSBcIlwiLFxyXG4gIHJlYWRPbmx5ID0gZmFsc2UsXHJcbiAgZGlzYWJsZWQgPSBmYWxzZSxcclxuICBhdXRvQ29tcGxldGUgPSBcIm9uXCIsXHJcbiAgc3RlcCA9IFwiMVwiLFxyXG4gIG1pbixcclxuICBtYXgsXHJcbiAgcmVxdWlyZWRGaWVsZFRleHQgPSBcIlwiLFxyXG4gIHBsYWNlaG9sZGVyID0gXCJcIlxyXG59OiBPdXRwdXRQcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICB7IVIuaXNFbXB0eShsYWJlbE5hbWUpICYmIFIuaXNFbXB0eShyZXF1aXJlZEZpZWxkVGV4dCkgPyAoXHJcbiAgICAgIDxPbmx5TGFiZWxOYW1lIGxhYmVsTmFtZT17bGFiZWxOYW1lfSAvPlxyXG4gICAgKSA6IG51bGx9XHJcbiAgICB7IVIuaXNFbXB0eShsYWJlbE5hbWUpICYmICFSLmlzRW1wdHkocmVxdWlyZWRGaWVsZFRleHQpID8gKFxyXG4gICAgICA8UmVxdWlyZWRMYWJlbE5hbWVcclxuICAgICAgICBsYWJlbE5hbWU9e2xhYmVsTmFtZX1cclxuICAgICAgICByZXF1aXJlZEZpZWxkVGV4dD17cmVxdWlyZWRGaWVsZFRleHR9XHJcbiAgICAgIC8+XHJcbiAgICApIDogbnVsbH1cclxuICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGFya051bWJlcklucHV0ICR7aW5wdXRDbGFzc05hbWV9ICR7XHJcbiAgICAgICAgZGlzYWJsZWQgfHwgcmVhZE9ubHkgPyBcImRpc2FibGVkXCIgOiBcIlwiXHJcbiAgICAgIH1gfVxyXG4gICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgaWQ9e2lkfVxyXG4gICAgICByZWFkT25seT17cmVhZE9ubHl9XHJcbiAgICAgIG1heD17bWF4fVxyXG4gICAgICBtaW49e21pbn1cclxuICAgICAgc3RlcD17c3RlcH1cclxuICAgICAgYXV0b0NvbXBsZXRlPXthdXRvQ29tcGxldGV9XHJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgb25DaGFuZ2U9e2NoYW5nZX1cclxuICAgIC8+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlPE91dHB1dFByb3BzLCBJbnB1dFByb3BzPihcclxuICB3aXRoSGFuZGxlcnMoe1xyXG4gICAgY2hhbmdlOiAoe1xyXG4gICAgICB1cGRhdGUsXHJcbiAgICAgIG1heCxcclxuICAgICAgbWluXHJcbiAgICB9OiB7XHJcbiAgICAgIHVwZGF0ZTogYW55O1xyXG4gICAgICBtYXg/OiBudW1iZXI7XHJcbiAgICAgIG1pbj86IG51bWJlcjtcclxuICAgIH0pID0+IChlOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgIGlmIChtaW4gIT09IHVuZGVmaW5lZCB8fCBtYXggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IG1pblRlc3QgPSBtaW4gIT09IHVuZGVmaW5lZCAmJiBwYXJzZUZsb2F0KHZhbCkgPCBtaW47XHJcbiAgICAgICAgY29uc3QgbWF4VGVzdCA9IG1heCAhPT0gdW5kZWZpbmVkICYmIHBhcnNlRmxvYXQodmFsKSA+IG1heDtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICByZXR1cm4gUi5hbnkoUi5lcXVhbHModHJ1ZSkpKFttaW5UZXN0LCBtYXhUZXN0XSlcclxuICAgICAgICAgID8gdXBkYXRlKFwiXCIpXHJcbiAgICAgICAgICA6IHVwZGF0ZSh2YWwpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB1cGRhdGUodmFsKTtcclxuICAgIH1cclxuICB9KVxyXG4pKE51bWVyaWNJbnB1dCk7XHJcbiJdfQ==