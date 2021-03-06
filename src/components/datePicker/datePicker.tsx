import React from "react";
import "react-dates/initialize";
import * as R from "ramda";
import { compose, withHandlers, withState } from "recompose";
import moment, { Moment } from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const OnlyLabelName = ({ labelName }: { labelName?: string }) => (
  <label htmlFor="select">
    <b>{labelName}</b>
  </label>
);

const RequiredLabelName = ({
  labelName,
  requiredFieldText
}: {
  labelName?: string;
  requiredFieldText?: string;
}) => (
  <label htmlFor="select">
    <div className="requiredLabel">
      <b>{labelName}</b>
      <div className="required">{requiredFieldText}</div>
    </div>
  </label>
);

const DatePicker = ({
  labelName,
  requiredFieldText,
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
  <>
    {!R.isEmpty(labelName) && R.isEmpty(requiredFieldText) ? (
      <OnlyLabelName labelName={labelName} />
    ) : null}
    {!R.isEmpty(labelName) && !R.isEmpty(requiredFieldText) ? (
      <RequiredLabelName
        labelName={labelName}
        requiredFieldText={requiredFieldText}
      />
    ) : null}
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
  </>
);

export type InputProps = {
  labelName?: string;
  requiredFieldText?: string;
  value: Moment | null;
  update: any;
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
    changeData: ({ update }: { update: any }) => (val: any) => update(val),
    setFocusedInput: (props: any) => ({ focused }: { focused: string }) =>
      props.updateFocusedInput(focused)
  })
)(DatePicker);
