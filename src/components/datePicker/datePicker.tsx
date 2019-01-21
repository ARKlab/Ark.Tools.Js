import React from "react";
import "react-dates/initialize";
import { compose, withHandlers, withState } from "recompose";
import moment, { Moment } from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./datePicker.scss";

const DatePicker = ({
  value,
  id = "arkDatePicker",
  changeData,
  focusedInput,
  setFocusedInput,
  format,
  disabled = false,
  readOnly = false,
  placeHolder = "Choose Date",
  withPortal = false,
  numberOfMonths = 1
}: OutputProps) => (
  <SingleDatePicker
    id={id}
    date={value}
    focused={focusedInput}
    onDateChange={changeData}
    onFocusChange={setFocusedInput}
    showClearDate
    small
    disabled={disabled}
    readOnly={readOnly}
    hideKeyboardShortcutsPanel
    displayFormat={format}
    numberOfMonths={numberOfMonths}
    withPortal={withPortal}
    placeholder={placeHolder}
  />
);

export type InputProps = {
  value: Moment | null;
  setDate: any;
  format: string;
  placeHolder?: string;
  numberOfMonths?: number;
  disabled?: boolean;
  withPortal?: boolean;
  readOnly?: boolean;
  id?: string;
};
export type OutputProps = InputProps & {
  changeData: any;
  setFocusedInput: any;
  focusedInput: boolean;
};

export default compose<OutputProps, InputProps>(
  withState("focusedInput", "updateFocusedInput", false),
  withHandlers({
    changeData: ({ setDate }: { setDate: any }) => (val: any) => setDate(val),
    setFocusedInput: (props: any) => ({ focused }: { focused: string }) =>
      props.updateFocusedInput(focused)
  })
)(DatePicker);
