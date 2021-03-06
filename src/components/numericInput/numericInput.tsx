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
  step?: string;
  placeholder?: string;
  max?: number;
  min?: number;
};

export type OutputProps = InputProps & {
  change: any;
};

const NumericInput = ({
  value,
  change,
  inputClassName = "",
  id = "arkNumberInput",
  labelName = "",
  readOnly = false,
  disabled = false,
  autoComplete = "on",
  step = "1",
  min,
  max,
  requiredFieldText = "",
  placeholder = ""
}: OutputProps) => (
  <div>
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
      type="number"
      className={`form-control arkNumberInput ${inputClassName} ${
        disabled || readOnly ? "disabled" : ""
      }`}
      value={value}
      placeholder={placeholder}
      id={id}
      readOnly={readOnly}
      max={max}
      min={min}
      step={step}
      autoComplete={autoComplete}
      disabled={disabled}
      onChange={change}
    />
  </div>
);

export default compose<OutputProps, InputProps>(
  withHandlers({
    change: ({
      update,
      max,
      min
    }: {
      update: any;
      max?: number;
      min?: number;
    }) => (e: any) => {
      const val = e.target.value;
      if (min !== undefined || max !== undefined) {
        const minTest = min !== undefined && parseFloat(val) < min;
        const maxTest = max !== undefined && parseFloat(val) > max;
        debugger;
        return R.any(R.equals(true))([minTest, maxTest])
          ? update("")
          : update(val);
      }
      return update(val);
    }
  })
)(NumericInput);
