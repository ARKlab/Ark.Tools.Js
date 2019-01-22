"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("react-dates/initialize");

var _recompose = require("recompose");

var _moment = _interopRequireDefault(require("moment"));

var _reactDates = require("react-dates");

require("react-dates/lib/css/_datepicker.css");

require("./dateRange.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePicker = function DatePicker(_ref) {
  var start = _ref.start,
      end = _ref.end,
      updateRange = _ref.updateRange,
      setFocusedInput = _ref.setFocusedInput,
      format = _ref.format,
      focusedInput = _ref.focusedInput,
      _ref$startPlaceHolder = _ref.startPlaceHolder,
      startPlaceHolder = _ref$startPlaceHolder === void 0 ? "From Date" : _ref$startPlaceHolder,
      _ref$endPlaceHolder = _ref.endPlaceHolder,
      endPlaceHolder = _ref$endPlaceHolder === void 0 ? "To Date" : _ref$endPlaceHolder,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? "datePicker" : _ref$id;
  return _react.default.createElement(_reactDates.DateRangePicker, {
    startDate: start,
    startDatePlaceholderText: startPlaceHolder,
    startDateId: "".concat(id, "_fromDate"),
    endDate: end,
    endDatePlaceholderText: endPlaceHolder,
    endDateId: "".concat(id, "_toDate"),
    onDatesChange: updateRange,
    focusedInput: focusedInput,
    onFocusChange: setFocusedInput,
    showClearDates: true,
    small: true,
    isOutsideRange: function isOutsideRange() {
      return false;
    },
    hideKeyboardShortcutsPanel: true,
    displayFormat: format
  });
};

var setRange = function setRange(_ref2) {
  var startDate = _ref2.startDate,
      endDate = _ref2.endDate,
      updateStart = _ref2.updateStart,
      updateEnd = _ref2.updateEnd,
      setDate = _ref2.setDate,
      format = _ref2.format;
  updateStart(startDate);
  updateEnd(endDate);

  if (startDate !== null && endDate !== null) {
    setDate({
      startDate: (0, _moment.default)(startDate).format(format),
      endDate: (0, _moment.default)(endDate).format(format)
    });
  } else if (startDate === null && endDate === null) {
    setDate({
      startDate: null,
      endDate: null
    });
  }
};

var _default = (0, _recompose.compose)((0, _recompose.withState)("focusedInput", "updateFocusedInput", null), (0, _recompose.withHandlers)({
  updateRange: function updateRange(_ref3) {
    var updateStart = _ref3.updateStart,
        updateEnd = _ref3.updateEnd,
        setDate = _ref3.setDate,
        format = _ref3.format;
    return function (_ref4) {
      var startDate = _ref4.startDate,
          endDate = _ref4.endDate;
      return setRange({
        startDate: startDate,
        endDate: endDate,
        updateStart: updateStart,
        updateEnd: updateEnd,
        setDate: setDate,
        format: format
      });
    };
  },
  setFocusedInput: function setFocusedInput(props) {
    return function (focusedInput) {
      return props.updateFocusedInput(focusedInput);
    };
  }
}))(DatePicker);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2RhdGVSYW5nZS9kYXRlUmFuZ2UudHN4Il0sIm5hbWVzIjpbIkRhdGVQaWNrZXIiLCJzdGFydCIsImVuZCIsInVwZGF0ZVJhbmdlIiwic2V0Rm9jdXNlZElucHV0IiwiZm9ybWF0IiwiZm9jdXNlZElucHV0Iiwic3RhcnRQbGFjZUhvbGRlciIsImVuZFBsYWNlSG9sZGVyIiwiaWQiLCJzZXRSYW5nZSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJ1cGRhdGVTdGFydCIsInVwZGF0ZUVuZCIsInNldERhdGUiLCJwcm9wcyIsInVwZGF0ZUZvY3VzZWRJbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxNQUNqQkMsS0FEaUIsUUFDakJBLEtBRGlCO0FBQUEsTUFFakJDLEdBRmlCLFFBRWpCQSxHQUZpQjtBQUFBLE1BR2pCQyxXQUhpQixRQUdqQkEsV0FIaUI7QUFBQSxNQUlqQkMsZUFKaUIsUUFJakJBLGVBSmlCO0FBQUEsTUFLakJDLE1BTGlCLFFBS2pCQSxNQUxpQjtBQUFBLE1BTWpCQyxZQU5pQixRQU1qQkEsWUFOaUI7QUFBQSxtQ0FPakJDLGdCQVBpQjtBQUFBLE1BT2pCQSxnQkFQaUIsc0NBT0UsV0FQRjtBQUFBLGlDQVFqQkMsY0FSaUI7QUFBQSxNQVFqQkEsY0FSaUIsb0NBUUEsU0FSQTtBQUFBLHFCQVNqQkMsRUFUaUI7QUFBQSxNQVNqQkEsRUFUaUIsd0JBU1osWUFUWTtBQUFBLFNBV2pCLDZCQUFDLDJCQUFEO0FBQ0UsSUFBQSxTQUFTLEVBQUVSLEtBRGI7QUFFRSxJQUFBLHdCQUF3QixFQUFFTSxnQkFGNUI7QUFHRSxJQUFBLFdBQVcsWUFBS0UsRUFBTCxjQUhiO0FBSUUsSUFBQSxPQUFPLEVBQUVQLEdBSlg7QUFLRSxJQUFBLHNCQUFzQixFQUFFTSxjQUwxQjtBQU1FLElBQUEsU0FBUyxZQUFLQyxFQUFMLFlBTlg7QUFPRSxJQUFBLGFBQWEsRUFBRU4sV0FQakI7QUFRRSxJQUFBLFlBQVksRUFBRUcsWUFSaEI7QUFTRSxJQUFBLGFBQWEsRUFBRUYsZUFUakI7QUFVRSxJQUFBLGNBQWMsTUFWaEI7QUFXRSxJQUFBLEtBQUssTUFYUDtBQVlFLElBQUEsY0FBYyxFQUFFO0FBQUEsYUFBTSxLQUFOO0FBQUEsS0FabEI7QUFhRSxJQUFBLDBCQUEwQixNQWI1QjtBQWNFLElBQUEsYUFBYSxFQUFFQztBQWRqQixJQVhpQjtBQUFBLENBQW5COztBQThDQSxJQUFNSyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxRQWNYO0FBQUEsTUFiSkMsU0FhSSxTQWJKQSxTQWFJO0FBQUEsTUFaSkMsT0FZSSxTQVpKQSxPQVlJO0FBQUEsTUFYSkMsV0FXSSxTQVhKQSxXQVdJO0FBQUEsTUFWSkMsU0FVSSxTQVZKQSxTQVVJO0FBQUEsTUFUSkMsT0FTSSxTQVRKQSxPQVNJO0FBQUEsTUFSSlYsTUFRSSxTQVJKQSxNQVFJO0FBQ0pRLEVBQUFBLFdBQVcsQ0FBQ0YsU0FBRCxDQUFYO0FBQ0FHLEVBQUFBLFNBQVMsQ0FBQ0YsT0FBRCxDQUFUOztBQUNBLE1BQUlELFNBQVMsS0FBSyxJQUFkLElBQXNCQyxPQUFPLEtBQUssSUFBdEMsRUFBNEM7QUFDMUNHLElBQUFBLE9BQU8sQ0FBQztBQUNOSixNQUFBQSxTQUFTLEVBQUUscUJBQU9BLFNBQVAsRUFBa0JOLE1BQWxCLENBQXlCQSxNQUF6QixDQURMO0FBRU5PLE1BQUFBLE9BQU8sRUFBRSxxQkFBT0EsT0FBUCxFQUFnQlAsTUFBaEIsQ0FBdUJBLE1BQXZCO0FBRkgsS0FBRCxDQUFQO0FBSUQsR0FMRCxNQUtPLElBQUlNLFNBQVMsS0FBSyxJQUFkLElBQXNCQyxPQUFPLEtBQUssSUFBdEMsRUFBNEM7QUFDakRHLElBQUFBLE9BQU8sQ0FBQztBQUFFSixNQUFBQSxTQUFTLEVBQUUsSUFBYjtBQUFtQkMsTUFBQUEsT0FBTyxFQUFFO0FBQTVCLEtBQUQsQ0FBUDtBQUNEO0FBQ0YsQ0F6QkQ7O2VBMkJlLHdCQUNiLDBCQUFVLGNBQVYsRUFBMEIsb0JBQTFCLEVBQWdELElBQWhELENBRGEsRUFFYiw2QkFBYTtBQUNYVCxFQUFBQSxXQUFXLEVBQUU7QUFBQSxRQUNYVSxXQURXLFNBQ1hBLFdBRFc7QUFBQSxRQUVYQyxTQUZXLFNBRVhBLFNBRlc7QUFBQSxRQUdYQyxPQUhXLFNBR1hBLE9BSFc7QUFBQSxRQUlYVixNQUpXLFNBSVhBLE1BSlc7QUFBQSxXQVVQO0FBQUEsVUFBR00sU0FBSCxTQUFHQSxTQUFIO0FBQUEsVUFBY0MsT0FBZCxTQUFjQSxPQUFkO0FBQUEsYUFDSkYsUUFBUSxDQUFDO0FBQ1BDLFFBQUFBLFNBQVMsRUFBVEEsU0FETztBQUVQQyxRQUFBQSxPQUFPLEVBQVBBLE9BRk87QUFHUEMsUUFBQUEsV0FBVyxFQUFYQSxXQUhPO0FBSVBDLFFBQUFBLFNBQVMsRUFBVEEsU0FKTztBQUtQQyxRQUFBQSxPQUFPLEVBQVBBLE9BTE87QUFNUFYsUUFBQUEsTUFBTSxFQUFOQTtBQU5PLE9BQUQsQ0FESjtBQUFBLEtBVk87QUFBQSxHQURGO0FBb0JYRCxFQUFBQSxlQUFlLEVBQUUseUJBQUNZLEtBQUQ7QUFBQSxXQUFnQixVQUFDVixZQUFEO0FBQUEsYUFDL0JVLEtBQUssQ0FBQ0Msa0JBQU4sQ0FBeUJYLFlBQXpCLENBRCtCO0FBQUEsS0FBaEI7QUFBQTtBQXBCTixDQUFiLENBRmEsRUF5QmJOLFVBekJhLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcInJlYWN0LWRhdGVzL2luaXRpYWxpemVcIjtcclxuaW1wb3J0IHsgY29tcG9zZSwgd2l0aEhhbmRsZXJzLCB3aXRoU3RhdGUgfSBmcm9tIFwicmVjb21wb3NlXCI7XHJcbmltcG9ydCBtb21lbnQsIHsgTW9tZW50IH0gZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXIgfSBmcm9tIFwicmVhY3QtZGF0ZXNcIjtcclxuaW1wb3J0IFwicmVhY3QtZGF0ZXMvbGliL2Nzcy9fZGF0ZXBpY2tlci5jc3NcIjtcclxuaW1wb3J0IFwiLi9kYXRlUmFuZ2Uuc2Nzc1wiO1xyXG5cclxuY29uc3QgRGF0ZVBpY2tlciA9ICh7XHJcbiAgc3RhcnQsXHJcbiAgZW5kLFxyXG4gIHVwZGF0ZVJhbmdlLFxyXG4gIHNldEZvY3VzZWRJbnB1dCxcclxuICBmb3JtYXQsXHJcbiAgZm9jdXNlZElucHV0LFxyXG4gIHN0YXJ0UGxhY2VIb2xkZXIgPSBcIkZyb20gRGF0ZVwiLFxyXG4gIGVuZFBsYWNlSG9sZGVyID0gXCJUbyBEYXRlXCIsXHJcbiAgaWQgPSBcImRhdGVQaWNrZXJcIlxyXG59OiBPdXRwdXRQcm9wcykgPT4gKFxyXG4gIDxEYXRlUmFuZ2VQaWNrZXJcclxuICAgIHN0YXJ0RGF0ZT17c3RhcnR9XHJcbiAgICBzdGFydERhdGVQbGFjZWhvbGRlclRleHQ9e3N0YXJ0UGxhY2VIb2xkZXJ9XHJcbiAgICBzdGFydERhdGVJZD17YCR7aWR9X2Zyb21EYXRlYH1cclxuICAgIGVuZERhdGU9e2VuZH1cclxuICAgIGVuZERhdGVQbGFjZWhvbGRlclRleHQ9e2VuZFBsYWNlSG9sZGVyfVxyXG4gICAgZW5kRGF0ZUlkPXtgJHtpZH1fdG9EYXRlYH1cclxuICAgIG9uRGF0ZXNDaGFuZ2U9e3VwZGF0ZVJhbmdlfVxyXG4gICAgZm9jdXNlZElucHV0PXtmb2N1c2VkSW5wdXR9XHJcbiAgICBvbkZvY3VzQ2hhbmdlPXtzZXRGb2N1c2VkSW5wdXR9XHJcbiAgICBzaG93Q2xlYXJEYXRlc1xyXG4gICAgc21hbGxcclxuICAgIGlzT3V0c2lkZVJhbmdlPXsoKSA9PiBmYWxzZX1cclxuICAgIGhpZGVLZXlib2FyZFNob3J0Y3V0c1BhbmVsXHJcbiAgICBkaXNwbGF5Rm9ybWF0PXtmb3JtYXR9XHJcbiAgLz5cclxuKTtcclxuXHJcbmV4cG9ydCB0eXBlIElucHV0UHJvcHMgPSB7XHJcbiAgc3RhcnQ6IE1vbWVudCB8IG51bGw7XHJcbiAgdXBkYXRlU3RhcnQ6IGFueTtcclxuICBlbmQ6IE1vbWVudCB8IG51bGw7XHJcbiAgdXBkYXRlRW5kOiBhbnk7XHJcbiAgc2V0RGF0ZTogYW55O1xyXG4gIGZvcm1hdDogc3RyaW5nO1xyXG4gIHN0YXJ0UGxhY2VIb2xkZXI/OiBzdHJpbmc7XHJcbiAgZW5kUGxhY2VIb2xkZXI/OiBzdHJpbmc7XHJcbiAgaWQ/OiBzdHJpbmc7XHJcbn07XHJcbmV4cG9ydCB0eXBlIE91dHB1dFByb3BzID0gSW5wdXRQcm9wcyAmIHtcclxuICB1cGRhdGVSYW5nZTogYW55O1xyXG4gIHNldEZvY3VzZWRJbnB1dDogYW55O1xyXG4gIGZvY3VzZWRJbnB1dDogYW55O1xyXG59O1xyXG5cclxuY29uc3Qgc2V0UmFuZ2UgPSAoe1xyXG4gIHN0YXJ0RGF0ZSxcclxuICBlbmREYXRlLFxyXG4gIHVwZGF0ZVN0YXJ0LFxyXG4gIHVwZGF0ZUVuZCxcclxuICBzZXREYXRlLFxyXG4gIGZvcm1hdFxyXG59OiB7XHJcbiAgc3RhcnREYXRlOiBhbnk7XHJcbiAgZW5kRGF0ZTogYW55O1xyXG4gIHVwZGF0ZVN0YXJ0OiBhbnk7XHJcbiAgdXBkYXRlRW5kOiBhbnk7XHJcbiAgc2V0RGF0ZTogYW55O1xyXG4gIGZvcm1hdDogc3RyaW5nO1xyXG59KSA9PiB7XHJcbiAgdXBkYXRlU3RhcnQoc3RhcnREYXRlKTtcclxuICB1cGRhdGVFbmQoZW5kRGF0ZSk7XHJcbiAgaWYgKHN0YXJ0RGF0ZSAhPT0gbnVsbCAmJiBlbmREYXRlICE9PSBudWxsKSB7XHJcbiAgICBzZXREYXRlKHtcclxuICAgICAgc3RhcnREYXRlOiBtb21lbnQoc3RhcnREYXRlKS5mb3JtYXQoZm9ybWF0KSxcclxuICAgICAgZW5kRGF0ZTogbW9tZW50KGVuZERhdGUpLmZvcm1hdChmb3JtYXQpXHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKHN0YXJ0RGF0ZSA9PT0gbnVsbCAmJiBlbmREYXRlID09PSBudWxsKSB7XHJcbiAgICBzZXREYXRlKHsgc3RhcnREYXRlOiBudWxsLCBlbmREYXRlOiBudWxsIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2U8T3V0cHV0UHJvcHMsIElucHV0UHJvcHM+KFxyXG4gIHdpdGhTdGF0ZShcImZvY3VzZWRJbnB1dFwiLCBcInVwZGF0ZUZvY3VzZWRJbnB1dFwiLCBudWxsKSxcclxuICB3aXRoSGFuZGxlcnMoe1xyXG4gICAgdXBkYXRlUmFuZ2U6ICh7XHJcbiAgICAgIHVwZGF0ZVN0YXJ0LFxyXG4gICAgICB1cGRhdGVFbmQsXHJcbiAgICAgIHNldERhdGUsXHJcbiAgICAgIGZvcm1hdFxyXG4gICAgfToge1xyXG4gICAgICB1cGRhdGVTdGFydDogYW55O1xyXG4gICAgICB1cGRhdGVFbmQ6IGFueTtcclxuICAgICAgc2V0RGF0ZTogYW55O1xyXG4gICAgICBmb3JtYXQ6IHN0cmluZztcclxuICAgIH0pID0+ICh7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9OiBSZWNvcmQ8XCJzdGFydERhdGVcIiB8IFwiZW5kRGF0ZVwiLCBzdHJpbmc+KSA9PlxyXG4gICAgICBzZXRSYW5nZSh7XHJcbiAgICAgICAgc3RhcnREYXRlLFxyXG4gICAgICAgIGVuZERhdGUsXHJcbiAgICAgICAgdXBkYXRlU3RhcnQsXHJcbiAgICAgICAgdXBkYXRlRW5kLFxyXG4gICAgICAgIHNldERhdGUsXHJcbiAgICAgICAgZm9ybWF0XHJcbiAgICAgIH0pLFxyXG4gICAgc2V0Rm9jdXNlZElucHV0OiAocHJvcHM6IGFueSkgPT4gKGZvY3VzZWRJbnB1dDogc3RyaW5nKSA9PlxyXG4gICAgICBwcm9wcy51cGRhdGVGb2N1c2VkSW5wdXQoZm9jdXNlZElucHV0KVxyXG4gIH0pXHJcbikoRGF0ZVBpY2tlcik7XHJcbiJdfQ==