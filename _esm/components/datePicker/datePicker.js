"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("react-dates/initialize");

var _recompose = require("recompose");

var _reactDates = require("react-dates");

require("react-dates/lib/css/_datepicker.css");

require("./datePicker.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePicker = function DatePicker(_ref) {
  var value = _ref.value,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? "arkDatePicker" : _ref$id,
      changeData = _ref.changeData,
      focusedInput = _ref.focusedInput,
      setFocusedInput = _ref.setFocusedInput,
      format = _ref.format,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$readOnly = _ref.readOnly,
      readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
      _ref$placeHolder = _ref.placeHolder,
      placeHolder = _ref$placeHolder === void 0 ? "Choose Date" : _ref$placeHolder,
      _ref$withPortal = _ref.withPortal,
      withPortal = _ref$withPortal === void 0 ? false : _ref$withPortal,
      _ref$numberOfMonths = _ref.numberOfMonths,
      numberOfMonths = _ref$numberOfMonths === void 0 ? 1 : _ref$numberOfMonths;
  return <_reactDates.SingleDatePicker id={id} date={value} focused={focusedInput} onDateChange={changeData} onFocusChange={setFocusedInput} showClearDate small disabled={disabled} readOnly={readOnly} hideKeyboardShortcutsPanel displayFormat={format} numberOfMonths={numberOfMonths} withPortal={withPortal} placeholder={placeHolder} />;
};

var _default = (0, _recompose.compose)((0, _recompose.withState)("focusedInput", "updateFocusedInput", false), (0, _recompose.withHandlers)({
  changeData: function changeData(_ref2) {
    var setDate = _ref2.setDate;
    return function (val) {
      return setDate(val);
    };
  },
  setFocusedInput: function setFocusedInput(props) {
    return function (_ref3) {
      var focused = _ref3.focused;
      return props.updateFocusedInput(focused);
    };
  }
}))(DatePicker);

exports.default = _default;