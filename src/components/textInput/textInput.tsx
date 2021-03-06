import React from "react";
import * as R from "ramda";
import { compose, withHandlers } from "recompose";

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

export type InputProps = {
  value: number | string;
  update: any;
  inputClassName?: string;
  id?: string;
  labelName?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoComplete?: string;
  requiredFieldText?: string;
  placeholder?: string;
};

export type OutputProps = InputProps & {
  change: any;
};

const NumericInput = ({
  value,
  change,
  inputClassName = "",
  id = "arkTextInput",
  labelName,
  readOnly = false,
  disabled = false,
  autoComplete = "on",
  requiredFieldText,
  placeholder = ""
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
    <input
      type="text"
      className={`form-control textInput ${inputClassName} ${
        disabled || readOnly ? "disabled" : ""
      }`}
      value={value}
      placeholder={placeholder}
      id={id}
      readOnly={readOnly}
      autoComplete={autoComplete}
      disabled={disabled}
      onChange={change}
    />
  </>
);

export default compose<OutputProps, InputProps>(
  withHandlers({
    change: ({ update }: { update: any }) => (e: any) => update(e.target.value)
  })
)(NumericInput);
