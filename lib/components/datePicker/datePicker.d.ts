import React from "react";
import "react-dates/initialize";
import { Moment } from "moment";
import "react-dates/lib/css/_datepicker.css";
export declare type InputProps = {
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
export declare type OutputProps = InputProps & {
    changeData: any;
    setFocusedInput: any;
    focusedInput: boolean;
};
declare const _default: React.ComponentClass<InputProps, any>;
export default _default;
