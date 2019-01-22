"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var R = _interopRequireWildcard(require("ramda"));

require("./textArea.scss");

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

var TextBoxInput = function TextBoxInput(_ref3) {
  var update = _ref3.update,
      value = _ref3.value,
      _ref3$areaClassName = _ref3.areaClassName,
      areaClassName = _ref3$areaClassName === void 0 ? "" : _ref3$areaClassName,
      _ref3$id = _ref3.id,
      id = _ref3$id === void 0 ? "arkTextArea" : _ref3$id,
      _ref3$labelName = _ref3.labelName,
      labelName = _ref3$labelName === void 0 ? "" : _ref3$labelName,
      _ref3$readOnly = _ref3.readOnly,
      readOnly = _ref3$readOnly === void 0 ? false : _ref3$readOnly,
      _ref3$disabled = _ref3.disabled,
      disabled = _ref3$disabled === void 0 ? false : _ref3$disabled,
      _ref3$autoComplete = _ref3.autoComplete,
      autoComplete = _ref3$autoComplete === void 0 ? "on" : _ref3$autoComplete,
      _ref3$minLength = _ref3.minLength,
      minLength = _ref3$minLength === void 0 ? 1 : _ref3$minLength,
      _ref3$maxLength = _ref3.maxLength,
      maxLength = _ref3$maxLength === void 0 ? 5000 : _ref3$maxLength,
      _ref3$requiredFieldTe = _ref3.requiredFieldText,
      requiredFieldText = _ref3$requiredFieldTe === void 0 ? "" : _ref3$requiredFieldTe,
      _ref3$placeholder = _ref3.placeholder,
      placeholder = _ref3$placeholder === void 0 ? "" : _ref3$placeholder;
  return _react.default.createElement("div", null, !R.isEmpty(labelName) && R.isEmpty(requiredFieldText) ? _react.default.createElement(OnlyLabelName, {
    labelName: labelName
  }) : null, !R.isEmpty(labelName) && !R.isEmpty(requiredFieldText) ? _react.default.createElement(RequiredLabelName, {
    labelName: labelName,
    requiredFieldText: requiredFieldText
  }) : null, _react.default.createElement("textarea", {
    className: "form-control arkTextArea ".concat(areaClassName, " ").concat(disabled || readOnly ? "disabled" : ""),
    value: value,
    placeholder: placeholder,
    id: id,
    readOnly: readOnly,
    maxLength: maxLength,
    minLength: minLength,
    autoComplete: autoComplete,
    disabled: disabled,
    onChange: function onChange(e) {
      return update(e.target.value);
    }
  }));
};

var _default = TextBoxInput;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RleHRBcmVhL3RleHRBcmVhLnRzeCJdLCJuYW1lcyI6WyJPbmx5TGFiZWxOYW1lIiwibGFiZWxOYW1lIiwiUmVxdWlyZWRMYWJlbE5hbWUiLCJyZXF1aXJlZEZpZWxkVGV4dCIsIlRleHRCb3hJbnB1dCIsInVwZGF0ZSIsInZhbHVlIiwiYXJlYUNsYXNzTmFtZSIsImlkIiwicmVhZE9ubHkiLCJkaXNhYmxlZCIsImF1dG9Db21wbGV0ZSIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsInBsYWNlaG9sZGVyIiwiUiIsImlzRW1wdHkiLCJlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxNQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxTQUNwQjtBQUFPLElBQUEsT0FBTyxFQUFDO0FBQWYsS0FDRSx3Q0FBSUEsU0FBSixDQURGLENBRG9CO0FBQUEsQ0FBdEI7O0FBS0EsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLE1BQ3hCRCxTQUR3QixTQUN4QkEsU0FEd0I7QUFBQSxNQUV4QkUsaUJBRndCLFNBRXhCQSxpQkFGd0I7QUFBQSxTQU94QjtBQUFPLElBQUEsT0FBTyxFQUFDO0FBQWYsS0FDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRSwwQ0FBTUYsU0FBTixDQURGLEVBRUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQTJCRSxpQkFBM0IsQ0FGRixDQURGLENBUHdCO0FBQUEsQ0FBMUI7O0FBOEJBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsTUFDbkJDLE1BRG1CLFNBQ25CQSxNQURtQjtBQUFBLE1BRW5CQyxLQUZtQixTQUVuQkEsS0FGbUI7QUFBQSxrQ0FHbkJDLGFBSG1CO0FBQUEsTUFHbkJBLGFBSG1CLG9DQUdILEVBSEc7QUFBQSx1QkFJbkJDLEVBSm1CO0FBQUEsTUFJbkJBLEVBSm1CLHlCQUlkLGFBSmM7QUFBQSw4QkFLbkJQLFNBTG1CO0FBQUEsTUFLbkJBLFNBTG1CLGdDQUtQLEVBTE87QUFBQSw2QkFNbkJRLFFBTm1CO0FBQUEsTUFNbkJBLFFBTm1CLCtCQU1SLEtBTlE7QUFBQSw2QkFPbkJDLFFBUG1CO0FBQUEsTUFPbkJBLFFBUG1CLCtCQU9SLEtBUFE7QUFBQSxpQ0FRbkJDLFlBUm1CO0FBQUEsTUFRbkJBLFlBUm1CLG1DQVFKLElBUkk7QUFBQSw4QkFTbkJDLFNBVG1CO0FBQUEsTUFTbkJBLFNBVG1CLGdDQVNQLENBVE87QUFBQSw4QkFVbkJDLFNBVm1CO0FBQUEsTUFVbkJBLFNBVm1CLGdDQVVQLElBVk87QUFBQSxvQ0FXbkJWLGlCQVhtQjtBQUFBLE1BV25CQSxpQkFYbUIsc0NBV0MsRUFYRDtBQUFBLGdDQVluQlcsV0FabUI7QUFBQSxNQVluQkEsV0FabUIsa0NBWUwsRUFaSztBQUFBLFNBY25CLDBDQUNHLENBQUNDLENBQUMsQ0FBQ0MsT0FBRixDQUFVZixTQUFWLENBQUQsSUFBeUJjLENBQUMsQ0FBQ0MsT0FBRixDQUFVYixpQkFBVixDQUF6QixHQUNDLDZCQUFDLGFBQUQ7QUFBZSxJQUFBLFNBQVMsRUFBRUY7QUFBMUIsSUFERCxHQUVHLElBSE4sRUFJRyxDQUFDYyxDQUFDLENBQUNDLE9BQUYsQ0FBVWYsU0FBVixDQUFELElBQXlCLENBQUNjLENBQUMsQ0FBQ0MsT0FBRixDQUFVYixpQkFBVixDQUExQixHQUNDLDZCQUFDLGlCQUFEO0FBQ0UsSUFBQSxTQUFTLEVBQUVGLFNBRGI7QUFFRSxJQUFBLGlCQUFpQixFQUFFRTtBQUZyQixJQURELEdBS0csSUFUTixFQVVFO0FBQ0UsSUFBQSxTQUFTLHFDQUE4QkksYUFBOUIsY0FDUEcsUUFBUSxJQUFJRCxRQUFaLEdBQXVCLFVBQXZCLEdBQW9DLEVBRDdCLENBRFg7QUFJRSxJQUFBLEtBQUssRUFBRUgsS0FKVDtBQUtFLElBQUEsV0FBVyxFQUFFUSxXQUxmO0FBTUUsSUFBQSxFQUFFLEVBQUVOLEVBTk47QUFPRSxJQUFBLFFBQVEsRUFBRUMsUUFQWjtBQVFFLElBQUEsU0FBUyxFQUFFSSxTQVJiO0FBU0UsSUFBQSxTQUFTLEVBQUVELFNBVGI7QUFVRSxJQUFBLFlBQVksRUFBRUQsWUFWaEI7QUFXRSxJQUFBLFFBQVEsRUFBRUQsUUFYWjtBQVlFLElBQUEsUUFBUSxFQUFFLGtCQUFBTyxDQUFDO0FBQUEsYUFBSVosTUFBTSxDQUFDWSxDQUFDLENBQUNDLE1BQUYsQ0FBU1osS0FBVixDQUFWO0FBQUE7QUFaYixJQVZGLENBZG1CO0FBQUEsQ0FBckI7O2VBeUNlRixZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBSIGZyb20gXCJyYW1kYVwiO1xyXG5pbXBvcnQgXCIuL3RleHRBcmVhLnNjc3NcIjtcclxuXHJcbmNvbnN0IE9ubHlMYWJlbE5hbWUgPSAoeyBsYWJlbE5hbWUgfTogeyBsYWJlbE5hbWU/OiBzdHJpbmcgfSkgPT4gKFxyXG4gIDxsYWJlbCBodG1sRm9yPVwic2VsZWN0XCI+XHJcbiAgICA8Yj57bGFiZWxOYW1lfTwvYj5cclxuICA8L2xhYmVsPlxyXG4pO1xyXG5jb25zdCBSZXF1aXJlZExhYmVsTmFtZSA9ICh7XHJcbiAgbGFiZWxOYW1lLFxyXG4gIHJlcXVpcmVkRmllbGRUZXh0XHJcbn06IHtcclxuICBsYWJlbE5hbWU/OiBzdHJpbmc7XHJcbiAgcmVxdWlyZWRGaWVsZFRleHQ/OiBzdHJpbmc7XHJcbn0pID0+IChcclxuICA8bGFiZWwgaHRtbEZvcj1cInNlbGVjdFwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZXF1aXJlZExhYmVsXCI+XHJcbiAgICAgIDxkaXY+e2xhYmVsTmFtZX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPntyZXF1aXJlZEZpZWxkVGV4dH08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbGFiZWw+XHJcbik7XHJcblxyXG5leHBvcnQgdHlwZSBJbnB1dFByb3BzID0ge1xyXG4gIHVwZGF0ZTogYW55O1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgYXJlYUNsYXNzTmFtZT86IHN0cmluZztcclxuICBpZD86IHN0cmluZztcclxuICBsYWJlbE5hbWU/OiBzdHJpbmc7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcclxuICBhdXRvQ29tcGxldGU/OiBzdHJpbmc7XHJcbiAgcmVxdWlyZWRGaWVsZFRleHQ/OiBzdHJpbmc7XHJcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgbWF4TGVuZ3RoPzogbnVtYmVyO1xyXG4gIG1pbkxlbmd0aD86IG51bWJlcjtcclxufTtcclxuXHJcbmNvbnN0IFRleHRCb3hJbnB1dCA9ICh7XHJcbiAgdXBkYXRlLFxyXG4gIHZhbHVlLFxyXG4gIGFyZWFDbGFzc05hbWUgPSBcIlwiLFxyXG4gIGlkID0gXCJhcmtUZXh0QXJlYVwiLFxyXG4gIGxhYmVsTmFtZSA9IFwiXCIsXHJcbiAgcmVhZE9ubHkgPSBmYWxzZSxcclxuICBkaXNhYmxlZCA9IGZhbHNlLFxyXG4gIGF1dG9Db21wbGV0ZSA9IFwib25cIixcclxuICBtaW5MZW5ndGggPSAxLFxyXG4gIG1heExlbmd0aCA9IDUwMDAsXHJcbiAgcmVxdWlyZWRGaWVsZFRleHQgPSBcIlwiLFxyXG4gIHBsYWNlaG9sZGVyID0gXCJcIlxyXG59OiBJbnB1dFByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIHshUi5pc0VtcHR5KGxhYmVsTmFtZSkgJiYgUi5pc0VtcHR5KHJlcXVpcmVkRmllbGRUZXh0KSA/IChcclxuICAgICAgPE9ubHlMYWJlbE5hbWUgbGFiZWxOYW1lPXtsYWJlbE5hbWV9IC8+XHJcbiAgICApIDogbnVsbH1cclxuICAgIHshUi5pc0VtcHR5KGxhYmVsTmFtZSkgJiYgIVIuaXNFbXB0eShyZXF1aXJlZEZpZWxkVGV4dCkgPyAoXHJcbiAgICAgIDxSZXF1aXJlZExhYmVsTmFtZVxyXG4gICAgICAgIGxhYmVsTmFtZT17bGFiZWxOYW1lfVxyXG4gICAgICAgIHJlcXVpcmVkRmllbGRUZXh0PXtyZXF1aXJlZEZpZWxkVGV4dH1cclxuICAgICAgLz5cclxuICAgICkgOiBudWxsfVxyXG4gICAgPHRleHRhcmVhXHJcbiAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBhcmtUZXh0QXJlYSAke2FyZWFDbGFzc05hbWV9ICR7XHJcbiAgICAgICAgZGlzYWJsZWQgfHwgcmVhZE9ubHkgPyBcImRpc2FibGVkXCIgOiBcIlwiXHJcbiAgICAgIH1gfVxyXG4gICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgaWQ9e2lkfVxyXG4gICAgICByZWFkT25seT17cmVhZE9ubHl9XHJcbiAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxyXG4gICAgICBtaW5MZW5ndGg9e21pbkxlbmd0aH1cclxuICAgICAgYXV0b0NvbXBsZXRlPXthdXRvQ29tcGxldGV9XHJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgIC8+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0Qm94SW5wdXQ7XHJcbiJdfQ==