import React from "react";
import * as R from "ramda";

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
  update: any;
  value: string;
  areaClassName?: string;
  id?: string;
  labelName?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoComplete?: string;
  requiredFieldText?: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
};

const TextBoxInput = ({
  update,
  value,
  areaClassName = "",
  id = "arkTextArea",
  labelName = "",
  readOnly = false,
  disabled = false,
  autoComplete = "on",
  minLength = 1,
  maxLength = 5000,
  requiredFieldText = "",
  placeholder = ""
}: InputProps) => (
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
    <textarea
      className={`form-control arkTextArea ${areaClassName} ${
        disabled || readOnly ? "disabled" : ""
      }`}
      value={value}
      placeholder={placeholder}
      id={id}
      readOnly={readOnly}
      maxLength={maxLength}
      minLength={minLength}
      autoComplete={autoComplete}
      disabled={disabled}
      onChange={e => update(e.target.value)}
    />
  </div>
);

export default TextBoxInput;
