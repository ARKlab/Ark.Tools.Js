import React from "react";
import "react-dates/initialize";
import { compose, withHandlers, withState } from "recompose";
import moment, { Moment } from "moment";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const DatePicker = ({
  start,
  end,
  updateRange,
  setFocusedInput,
  format,
  focusedInput,
  startPlaceHolder = "From Date",
  endPlaceHolder = "To Date",
  id = "datePicker"
}: OutputProps) => (
  <DateRangePicker
    startDate={start}
    startDatePlaceholderText={startPlaceHolder}
    startDateId={`${id}_fromDate`}
    endDate={end}
    endDatePlaceholderText={endPlaceHolder}
    endDateId={`${id}_toDate`}
    onDatesChange={updateRange}
    focusedInput={focusedInput}
    onFocusChange={setFocusedInput}
    showClearDates
    small
    isOutsideRange={() => false}
    hideKeyboardShortcutsPanel
    displayFormat={format}
  />
);

export type InputProps = {
  start: Moment | null;
  updateStart: any;
  end: Moment | null;
  updateEnd: any;
  setDate: any;
  format: string;
  startPlaceHolder?: string;
  endPlaceHolder?: string;
  id?: string;
};
export type OutputProps = InputProps & {
  updateRange: any;
  setFocusedInput: any;
  focusedInput: any;
};

const setRange = ({
  startDate,
  endDate,
  updateStart,
  updateEnd,
  setDate,
  format
}: {
  startDate: any;
  endDate: any;
  updateStart: any;
  updateEnd: any;
  setDate: any;
  format: string;
}) => {
  updateStart(startDate);
  updateEnd(endDate);
  if (startDate !== null && endDate !== null) {
    setDate({
      startDate: moment(startDate).format(format),
      endDate: moment(endDate).format(format)
    });
  } else if (startDate === null && endDate === null) {
    setDate({ startDate: null, endDate: null });
  }
};

export default compose<OutputProps, InputProps>(
  withState("focusedInput", "updateFocusedInput", null),
  withHandlers({
    updateRange: ({
      updateStart,
      updateEnd,
      setDate,
      format
    }: {
      updateStart: any;
      updateEnd: any;
      setDate: any;
      format: string;
    }) => ({ startDate, endDate }: Record<"startDate" | "endDate", string>) =>
      setRange({
        startDate,
        endDate,
        updateStart,
        updateEnd,
        setDate,
        format
      }),
    setFocusedInput: (props: any) => (focusedInput: string) =>
      props.updateFocusedInput(focusedInput)
  })
)(DatePicker);
