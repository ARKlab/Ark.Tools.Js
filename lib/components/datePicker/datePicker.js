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
  return _react.default.createElement(_reactDates.SingleDatePicker, {
    id: id,
    date: value,
    focused: focusedInput,
    onDateChange: changeData,
    onFocusChange: setFocusedInput,
    showClearDate: true,
    small: true,
    disabled: disabled,
    readOnly: readOnly,
    hideKeyboardShortcutsPanel: true,
    displayFormat: format,
    numberOfMonths: numberOfMonths,
    withPortal: withPortal,
    placeholder: placeHolder
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2RhdGVQaWNrZXIvZGF0ZVBpY2tlci50c3giXSwibmFtZXMiOlsiRGF0ZVBpY2tlciIsInZhbHVlIiwiaWQiLCJjaGFuZ2VEYXRhIiwiZm9jdXNlZElucHV0Iiwic2V0Rm9jdXNlZElucHV0IiwiZm9ybWF0IiwiZGlzYWJsZWQiLCJyZWFkT25seSIsInBsYWNlSG9sZGVyIiwid2l0aFBvcnRhbCIsIm51bWJlck9mTW9udGhzIiwic2V0RGF0ZSIsInZhbCIsInByb3BzIiwiZm9jdXNlZCIsInVwZGF0ZUZvY3VzZWRJbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxNQUNqQkMsS0FEaUIsUUFDakJBLEtBRGlCO0FBQUEscUJBRWpCQyxFQUZpQjtBQUFBLE1BRWpCQSxFQUZpQix3QkFFWixlQUZZO0FBQUEsTUFHakJDLFVBSGlCLFFBR2pCQSxVQUhpQjtBQUFBLE1BSWpCQyxZQUppQixRQUlqQkEsWUFKaUI7QUFBQSxNQUtqQkMsZUFMaUIsUUFLakJBLGVBTGlCO0FBQUEsTUFNakJDLE1BTmlCLFFBTWpCQSxNQU5pQjtBQUFBLDJCQU9qQkMsUUFQaUI7QUFBQSxNQU9qQkEsUUFQaUIsOEJBT04sS0FQTTtBQUFBLDJCQVFqQkMsUUFSaUI7QUFBQSxNQVFqQkEsUUFSaUIsOEJBUU4sS0FSTTtBQUFBLDhCQVNqQkMsV0FUaUI7QUFBQSxNQVNqQkEsV0FUaUIsaUNBU0gsYUFURztBQUFBLDZCQVVqQkMsVUFWaUI7QUFBQSxNQVVqQkEsVUFWaUIsZ0NBVUosS0FWSTtBQUFBLGlDQVdqQkMsY0FYaUI7QUFBQSxNQVdqQkEsY0FYaUIsb0NBV0EsQ0FYQTtBQUFBLFNBYWpCLDZCQUFDLDRCQUFEO0FBQ0UsSUFBQSxFQUFFLEVBQUVULEVBRE47QUFFRSxJQUFBLElBQUksRUFBRUQsS0FGUjtBQUdFLElBQUEsT0FBTyxFQUFFRyxZQUhYO0FBSUUsSUFBQSxZQUFZLEVBQUVELFVBSmhCO0FBS0UsSUFBQSxhQUFhLEVBQUVFLGVBTGpCO0FBTUUsSUFBQSxhQUFhLE1BTmY7QUFPRSxJQUFBLEtBQUssTUFQUDtBQVFFLElBQUEsUUFBUSxFQUFFRSxRQVJaO0FBU0UsSUFBQSxRQUFRLEVBQUVDLFFBVFo7QUFVRSxJQUFBLDBCQUEwQixNQVY1QjtBQVdFLElBQUEsYUFBYSxFQUFFRixNQVhqQjtBQVlFLElBQUEsY0FBYyxFQUFFSyxjQVpsQjtBQWFFLElBQUEsVUFBVSxFQUFFRCxVQWJkO0FBY0UsSUFBQSxXQUFXLEVBQUVEO0FBZGYsSUFiaUI7QUFBQSxDQUFuQjs7ZUFnRGUsd0JBQ2IsMEJBQVUsY0FBVixFQUEwQixvQkFBMUIsRUFBZ0QsS0FBaEQsQ0FEYSxFQUViLDZCQUFhO0FBQ1hOLEVBQUFBLFVBQVUsRUFBRTtBQUFBLFFBQUdTLE9BQUgsU0FBR0EsT0FBSDtBQUFBLFdBQW1DLFVBQUNDLEdBQUQ7QUFBQSxhQUFjRCxPQUFPLENBQUNDLEdBQUQsQ0FBckI7QUFBQSxLQUFuQztBQUFBLEdBREQ7QUFFWFIsRUFBQUEsZUFBZSxFQUFFLHlCQUFDUyxLQUFEO0FBQUEsV0FBZ0I7QUFBQSxVQUFHQyxPQUFILFNBQUdBLE9BQUg7QUFBQSxhQUMvQkQsS0FBSyxDQUFDRSxrQkFBTixDQUF5QkQsT0FBekIsQ0FEK0I7QUFBQSxLQUFoQjtBQUFBO0FBRk4sQ0FBYixDQUZhLEVBT2JmLFVBUGEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwicmVhY3QtZGF0ZXMvaW5pdGlhbGl6ZVwiO1xyXG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoSGFuZGxlcnMsIHdpdGhTdGF0ZSB9IGZyb20gXCJyZWNvbXBvc2VcIjtcclxuaW1wb3J0IG1vbWVudCwgeyBNb21lbnQgfSBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7IFNpbmdsZURhdGVQaWNrZXIgfSBmcm9tIFwicmVhY3QtZGF0ZXNcIjtcclxuaW1wb3J0IFwicmVhY3QtZGF0ZXMvbGliL2Nzcy9fZGF0ZXBpY2tlci5jc3NcIjtcclxuaW1wb3J0IFwiLi9kYXRlUGlja2VyLnNjc3NcIjtcclxuXHJcbmNvbnN0IERhdGVQaWNrZXIgPSAoe1xyXG4gIHZhbHVlLFxyXG4gIGlkID0gXCJhcmtEYXRlUGlja2VyXCIsXHJcbiAgY2hhbmdlRGF0YSxcclxuICBmb2N1c2VkSW5wdXQsXHJcbiAgc2V0Rm9jdXNlZElucHV0LFxyXG4gIGZvcm1hdCxcclxuICBkaXNhYmxlZCA9IGZhbHNlLFxyXG4gIHJlYWRPbmx5ID0gZmFsc2UsXHJcbiAgcGxhY2VIb2xkZXIgPSBcIkNob29zZSBEYXRlXCIsXHJcbiAgd2l0aFBvcnRhbCA9IGZhbHNlLFxyXG4gIG51bWJlck9mTW9udGhzID0gMVxyXG59OiBPdXRwdXRQcm9wcykgPT4gKFxyXG4gIDxTaW5nbGVEYXRlUGlja2VyXHJcbiAgICBpZD17aWR9XHJcbiAgICBkYXRlPXt2YWx1ZX1cclxuICAgIGZvY3VzZWQ9e2ZvY3VzZWRJbnB1dH1cclxuICAgIG9uRGF0ZUNoYW5nZT17Y2hhbmdlRGF0YX1cclxuICAgIG9uRm9jdXNDaGFuZ2U9e3NldEZvY3VzZWRJbnB1dH1cclxuICAgIHNob3dDbGVhckRhdGVcclxuICAgIHNtYWxsXHJcbiAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICByZWFkT25seT17cmVhZE9ubHl9XHJcbiAgICBoaWRlS2V5Ym9hcmRTaG9ydGN1dHNQYW5lbFxyXG4gICAgZGlzcGxheUZvcm1hdD17Zm9ybWF0fVxyXG4gICAgbnVtYmVyT2ZNb250aHM9e251bWJlck9mTW9udGhzfVxyXG4gICAgd2l0aFBvcnRhbD17d2l0aFBvcnRhbH1cclxuICAgIHBsYWNlaG9sZGVyPXtwbGFjZUhvbGRlcn1cclxuICAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IHR5cGUgSW5wdXRQcm9wcyA9IHtcclxuICB2YWx1ZTogTW9tZW50IHwgbnVsbDtcclxuICBzZXREYXRlOiBhbnk7XHJcbiAgZm9ybWF0OiBzdHJpbmc7XHJcbiAgcGxhY2VIb2xkZXI/OiBzdHJpbmc7XHJcbiAgbnVtYmVyT2ZNb250aHM/OiBudW1iZXI7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIHdpdGhQb3J0YWw/OiBib29sZWFuO1xyXG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcclxuICBpZD86IHN0cmluZztcclxufTtcclxuZXhwb3J0IHR5cGUgT3V0cHV0UHJvcHMgPSBJbnB1dFByb3BzICYge1xyXG4gIGNoYW5nZURhdGE6IGFueTtcclxuICBzZXRGb2N1c2VkSW5wdXQ6IGFueTtcclxuICBmb2N1c2VkSW5wdXQ6IGJvb2xlYW47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlPE91dHB1dFByb3BzLCBJbnB1dFByb3BzPihcclxuICB3aXRoU3RhdGUoXCJmb2N1c2VkSW5wdXRcIiwgXCJ1cGRhdGVGb2N1c2VkSW5wdXRcIiwgZmFsc2UpLFxyXG4gIHdpdGhIYW5kbGVycyh7XHJcbiAgICBjaGFuZ2VEYXRhOiAoeyBzZXREYXRlIH06IHsgc2V0RGF0ZTogYW55IH0pID0+ICh2YWw6IGFueSkgPT4gc2V0RGF0ZSh2YWwpLFxyXG4gICAgc2V0Rm9jdXNlZElucHV0OiAocHJvcHM6IGFueSkgPT4gKHsgZm9jdXNlZCB9OiB7IGZvY3VzZWQ6IHN0cmluZyB9KSA9PlxyXG4gICAgICBwcm9wcy51cGRhdGVGb2N1c2VkSW5wdXQoZm9jdXNlZClcclxuICB9KVxyXG4pKERhdGVQaWNrZXIpO1xyXG4iXX0=