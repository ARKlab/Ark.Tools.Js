import React from "react";
import "react-dates/initialize";
import { compose, withHandlers, withState } from "recompose";
import moment from "moment";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./dateRange.scss";

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
  return <DateRangePicker startDate={start} startDatePlaceholderText={startPlaceHolder} startDateId={"".concat(id, "_fromDate")} endDate={end} endDatePlaceholderText={endPlaceHolder} endDateId={"".concat(id, "_toDate")} onDatesChange={updateRange} focusedInput={focusedInput} onFocusChange={setFocusedInput} showClearDates small isOutsideRange={function () {
    return false;
  }} hideKeyboardShortcutsPanel displayFormat={format} />;
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
      startDate: moment(startDate).format(format),
      endDate: moment(endDate).format(format)
    });
  } else if (startDate === null && endDate === null) {
    setDate({
      startDate: null,
      endDate: null
    });
  }
};

export default compose(withState("focusedInput", "updateFocusedInput", null), withHandlers({
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