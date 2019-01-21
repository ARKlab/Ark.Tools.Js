import React from "react";
import * as R from "ramda";
import "./textArea.scss";

var OnlyLabelName = function OnlyLabelName(_ref) {
  var labelName = _ref.labelName;
  return <label htmlFor="select">
    <b>{labelName}</b>
  </label>;
};

var RequiredLabelName = function RequiredLabelName(_ref2) {
  var labelName = _ref2.labelName,
      requiredFieldText = _ref2.requiredFieldText;
  return <label htmlFor="select">
    <div className="requiredLabel">
      <div>{labelName}</div>
      <div className="required">{requiredFieldText}</div>
    </div>
  </label>;
};

var TextBoxInput = function TextBoxInput(_ref3) {
  var update = _ref3.update,
      value = _ref3.value,
      _ref3$areaClassName = _ref3.areaClassName,
      areaClassName = _ref3$areaClassName === void 0 ? "" : _ref3$areaClassName,
      _ref3$id = _ref3.id,
      id = _ref3$id === void 0 ? "arkTextArea" : _ref3$id,
      _ref3$labelName = _ref3.labelName,
      labelName = _ref3$labelName === void 0 ? "" : _ref3$labelName,
      _ref3$readOnly = _ref3.readOnly,
      readOnly = _ref3$readOnly === void 0 ? false : _ref3$readOnly,
      _ref3$disabled = _ref3.disabled,
      disabled = _ref3$disabled === void 0 ? false : _ref3$disabled,
      _ref3$autoComplete = _ref3.autoComplete,
      autoComplete = _ref3$autoComplete === void 0 ? "on" : _ref3$autoComplete,
      _ref3$minLength = _ref3.minLength,
      minLength = _ref3$minLength === void 0 ? 1 : _ref3$minLength,
      _ref3$maxLength = _ref3.maxLength,
      maxLength = _ref3$maxLength === void 0 ? 5000 : _ref3$maxLength,
      _ref3$requiredFieldTe = _ref3.requiredFieldText,
      requiredFieldText = _ref3$requiredFieldTe === void 0 ? "" : _ref3$requiredFieldTe,
      _ref3$placeholder = _ref3.placeholder,
      placeholder = _ref3$placeholder === void 0 ? "" : _ref3$placeholder;
  return <div>
    {!R.isEmpty(labelName) && R.isEmpty(requiredFieldText) ? <OnlyLabelName labelName={labelName} /> : null}
    {!R.isEmpty(labelName) && !R.isEmpty(requiredFieldText) ? <RequiredLabelName labelName={labelName} requiredFieldText={requiredFieldText} /> : null}
    <textarea className={"form-control arkTextArea ".concat(areaClassName, " ").concat(disabled || readOnly ? "disabled" : "")} value={value} placeholder={placeholder} id={id} readOnly={readOnly} maxLength={maxLength} minLength={minLength} autoComplete={autoComplete} disabled={disabled} onChange={function (e) {
      return update(e.target.value);
    }} />
  </div>;
};

export default TextBoxInput;