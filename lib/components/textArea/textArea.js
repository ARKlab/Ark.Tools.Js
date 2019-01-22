"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var R = _interopRequireWildcard(require("ramda"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RleHRBcmVhL3RleHRBcmVhLnRzeCJdLCJuYW1lcyI6WyJPbmx5TGFiZWxOYW1lIiwibGFiZWxOYW1lIiwiUmVxdWlyZWRMYWJlbE5hbWUiLCJyZXF1aXJlZEZpZWxkVGV4dCIsIlRleHRCb3hJbnB1dCIsInVwZGF0ZSIsInZhbHVlIiwiYXJlYUNsYXNzTmFtZSIsImlkIiwicmVhZE9ubHkiLCJkaXNhYmxlZCIsImF1dG9Db21wbGV0ZSIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsInBsYWNlaG9sZGVyIiwiUiIsImlzRW1wdHkiLCJlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxNQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxTQUNwQjtBQUFPLElBQUEsT0FBTyxFQUFDO0FBQWYsS0FDRSx3Q0FBSUEsU0FBSixDQURGLENBRG9CO0FBQUEsQ0FBdEI7O0FBS0EsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLE1BQ3hCRCxTQUR3QixTQUN4QkEsU0FEd0I7QUFBQSxNQUV4QkUsaUJBRndCLFNBRXhCQSxpQkFGd0I7QUFBQSxTQU94QjtBQUFPLElBQUEsT0FBTyxFQUFDO0FBQWYsS0FDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRSwwQ0FBTUYsU0FBTixDQURGLEVBRUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQTJCRSxpQkFBM0IsQ0FGRixDQURGLENBUHdCO0FBQUEsQ0FBMUI7O0FBOEJBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsTUFDbkJDLE1BRG1CLFNBQ25CQSxNQURtQjtBQUFBLE1BRW5CQyxLQUZtQixTQUVuQkEsS0FGbUI7QUFBQSxrQ0FHbkJDLGFBSG1CO0FBQUEsTUFHbkJBLGFBSG1CLG9DQUdILEVBSEc7QUFBQSx1QkFJbkJDLEVBSm1CO0FBQUEsTUFJbkJBLEVBSm1CLHlCQUlkLGFBSmM7QUFBQSw4QkFLbkJQLFNBTG1CO0FBQUEsTUFLbkJBLFNBTG1CLGdDQUtQLEVBTE87QUFBQSw2QkFNbkJRLFFBTm1CO0FBQUEsTUFNbkJBLFFBTm1CLCtCQU1SLEtBTlE7QUFBQSw2QkFPbkJDLFFBUG1CO0FBQUEsTUFPbkJBLFFBUG1CLCtCQU9SLEtBUFE7QUFBQSxpQ0FRbkJDLFlBUm1CO0FBQUEsTUFRbkJBLFlBUm1CLG1DQVFKLElBUkk7QUFBQSw4QkFTbkJDLFNBVG1CO0FBQUEsTUFTbkJBLFNBVG1CLGdDQVNQLENBVE87QUFBQSw4QkFVbkJDLFNBVm1CO0FBQUEsTUFVbkJBLFNBVm1CLGdDQVVQLElBVk87QUFBQSxvQ0FXbkJWLGlCQVhtQjtBQUFBLE1BV25CQSxpQkFYbUIsc0NBV0MsRUFYRDtBQUFBLGdDQVluQlcsV0FabUI7QUFBQSxNQVluQkEsV0FabUIsa0NBWUwsRUFaSztBQUFBLFNBY25CLDBDQUNHLENBQUNDLENBQUMsQ0FBQ0MsT0FBRixDQUFVZixTQUFWLENBQUQsSUFBeUJjLENBQUMsQ0FBQ0MsT0FBRixDQUFVYixpQkFBVixDQUF6QixHQUNDLDZCQUFDLGFBQUQ7QUFBZSxJQUFBLFNBQVMsRUFBRUY7QUFBMUIsSUFERCxHQUVHLElBSE4sRUFJRyxDQUFDYyxDQUFDLENBQUNDLE9BQUYsQ0FBVWYsU0FBVixDQUFELElBQXlCLENBQUNjLENBQUMsQ0FBQ0MsT0FBRixDQUFVYixpQkFBVixDQUExQixHQUNDLDZCQUFDLGlCQUFEO0FBQ0UsSUFBQSxTQUFTLEVBQUVGLFNBRGI7QUFFRSxJQUFBLGlCQUFpQixFQUFFRTtBQUZyQixJQURELEdBS0csSUFUTixFQVVFO0FBQ0UsSUFBQSxTQUFTLHFDQUE4QkksYUFBOUIsY0FDUEcsUUFBUSxJQUFJRCxRQUFaLEdBQXVCLFVBQXZCLEdBQW9DLEVBRDdCLENBRFg7QUFJRSxJQUFBLEtBQUssRUFBRUgsS0FKVDtBQUtFLElBQUEsV0FBVyxFQUFFUSxXQUxmO0FBTUUsSUFBQSxFQUFFLEVBQUVOLEVBTk47QUFPRSxJQUFBLFFBQVEsRUFBRUMsUUFQWjtBQVFFLElBQUEsU0FBUyxFQUFFSSxTQVJiO0FBU0UsSUFBQSxTQUFTLEVBQUVELFNBVGI7QUFVRSxJQUFBLFlBQVksRUFBRUQsWUFWaEI7QUFXRSxJQUFBLFFBQVEsRUFBRUQsUUFYWjtBQVlFLElBQUEsUUFBUSxFQUFFLGtCQUFBTyxDQUFDO0FBQUEsYUFBSVosTUFBTSxDQUFDWSxDQUFDLENBQUNDLE1BQUYsQ0FBU1osS0FBVixDQUFWO0FBQUE7QUFaYixJQVZGLENBZG1CO0FBQUEsQ0FBckI7O2VBeUNlRixZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBSIGZyb20gXCJyYW1kYVwiO1xyXG5cclxuY29uc3QgT25seUxhYmVsTmFtZSA9ICh7IGxhYmVsTmFtZSB9OiB7IGxhYmVsTmFtZT86IHN0cmluZyB9KSA9PiAoXHJcbiAgPGxhYmVsIGh0bWxGb3I9XCJzZWxlY3RcIj5cclxuICAgIDxiPntsYWJlbE5hbWV9PC9iPlxyXG4gIDwvbGFiZWw+XHJcbik7XHJcbmNvbnN0IFJlcXVpcmVkTGFiZWxOYW1lID0gKHtcclxuICBsYWJlbE5hbWUsXHJcbiAgcmVxdWlyZWRGaWVsZFRleHRcclxufToge1xyXG4gIGxhYmVsTmFtZT86IHN0cmluZztcclxuICByZXF1aXJlZEZpZWxkVGV4dD86IHN0cmluZztcclxufSkgPT4gKFxyXG4gIDxsYWJlbCBodG1sRm9yPVwic2VsZWN0XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcXVpcmVkTGFiZWxcIj5cclxuICAgICAgPGRpdj57bGFiZWxOYW1lfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+e3JlcXVpcmVkRmllbGRUZXh0fTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9sYWJlbD5cclxuKTtcclxuXHJcbmV4cG9ydCB0eXBlIElucHV0UHJvcHMgPSB7XHJcbiAgdXBkYXRlOiBhbnk7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICBhcmVhQ2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGlkPzogc3RyaW5nO1xyXG4gIGxhYmVsTmFtZT86IHN0cmluZztcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xyXG4gIGF1dG9Db21wbGV0ZT86IHN0cmluZztcclxuICByZXF1aXJlZEZpZWxkVGV4dD86IHN0cmluZztcclxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICBtYXhMZW5ndGg/OiBudW1iZXI7XHJcbiAgbWluTGVuZ3RoPzogbnVtYmVyO1xyXG59O1xyXG5cclxuY29uc3QgVGV4dEJveElucHV0ID0gKHtcclxuICB1cGRhdGUsXHJcbiAgdmFsdWUsXHJcbiAgYXJlYUNsYXNzTmFtZSA9IFwiXCIsXHJcbiAgaWQgPSBcImFya1RleHRBcmVhXCIsXHJcbiAgbGFiZWxOYW1lID0gXCJcIixcclxuICByZWFkT25seSA9IGZhbHNlLFxyXG4gIGRpc2FibGVkID0gZmFsc2UsXHJcbiAgYXV0b0NvbXBsZXRlID0gXCJvblwiLFxyXG4gIG1pbkxlbmd0aCA9IDEsXHJcbiAgbWF4TGVuZ3RoID0gNTAwMCxcclxuICByZXF1aXJlZEZpZWxkVGV4dCA9IFwiXCIsXHJcbiAgcGxhY2Vob2xkZXIgPSBcIlwiXHJcbn06IElucHV0UHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAgeyFSLmlzRW1wdHkobGFiZWxOYW1lKSAmJiBSLmlzRW1wdHkocmVxdWlyZWRGaWVsZFRleHQpID8gKFxyXG4gICAgICA8T25seUxhYmVsTmFtZSBsYWJlbE5hbWU9e2xhYmVsTmFtZX0gLz5cclxuICAgICkgOiBudWxsfVxyXG4gICAgeyFSLmlzRW1wdHkobGFiZWxOYW1lKSAmJiAhUi5pc0VtcHR5KHJlcXVpcmVkRmllbGRUZXh0KSA/IChcclxuICAgICAgPFJlcXVpcmVkTGFiZWxOYW1lXHJcbiAgICAgICAgbGFiZWxOYW1lPXtsYWJlbE5hbWV9XHJcbiAgICAgICAgcmVxdWlyZWRGaWVsZFRleHQ9e3JlcXVpcmVkRmllbGRUZXh0fVxyXG4gICAgICAvPlxyXG4gICAgKSA6IG51bGx9XHJcbiAgICA8dGV4dGFyZWFcclxuICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGFya1RleHRBcmVhICR7YXJlYUNsYXNzTmFtZX0gJHtcclxuICAgICAgICBkaXNhYmxlZCB8fCByZWFkT25seSA/IFwiZGlzYWJsZWRcIiA6IFwiXCJcclxuICAgICAgfWB9XHJcbiAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICBpZD17aWR9XHJcbiAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cclxuICAgICAgbWF4TGVuZ3RoPXttYXhMZW5ndGh9XHJcbiAgICAgIG1pbkxlbmd0aD17bWluTGVuZ3RofVxyXG4gICAgICBhdXRvQ29tcGxldGU9e2F1dG9Db21wbGV0ZX1cclxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICBvbkNoYW5nZT17ZSA9PiB1cGRhdGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgLz5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRCb3hJbnB1dDtcclxuIl19