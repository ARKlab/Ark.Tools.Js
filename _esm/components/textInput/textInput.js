import React from "react";
import * as R from "ramda";
import { compose, withHandlers } from "recompose";
import "./textInput.scss";

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

var NumericInput = function NumericInput(_ref3) {
  var value = _ref3.value,
      change = _ref3.change,
      _ref3$inputClassName = _ref3.inputClassName,
      inputClassName = _ref3$inputClassName === void 0 ? "" : _ref3$inputClassName,
      _ref3$id = _ref3.id,
      id = _ref3$id === void 0 ? "arkTextInput" : _ref3$id,
      labelName = _ref3.labelName,
      _ref3$readOnly = _ref3.readOnly,
      readOnly = _ref3$readOnly === void 0 ? false : _ref3$readOnly,
      _ref3$disabled = _ref3.disabled,
      disabled = _ref3$disabled === void 0 ? false : _ref3$disabled,
      _ref3$autoComplete = _ref3.autoComplete,
      autoComplete = _ref3$autoComplete === void 0 ? "on" : _ref3$autoComplete,
      requiredFieldText = _ref3.requiredFieldText,
      _ref3$placeholder = _ref3.placeholder,
      placeholder = _ref3$placeholder === void 0 ? "" : _ref3$placeholder;
  return <div>
    {!R.isEmpty(labelName) && R.isEmpty(requiredFieldText) ? <OnlyLabelName labelName={labelName} /> : null}
    {!R.isEmpty(labelName) && !R.isEmpty(requiredFieldText) ? <RequiredLabelName labelName={labelName} requiredFieldText={requiredFieldText} /> : null}
    <input type="text" className={"form-control textInput ".concat(inputClassName, " ").concat(disabled || readOnly ? "disabled" : "")} value={value} placeholder={placeholder} id={id} readOnly={readOnly} autoComplete={autoComplete} disabled={disabled} onChange={change} />
  </div>;
};

export default compose(withHandlers({
  change: function change(_ref4) {
    var update = _ref4.update;
    return function (e) {
      return update(e.target.value);
    };
  }
}))(NumericInput);