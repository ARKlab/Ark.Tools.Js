import React from "react";
import "react-dates/initialize";
import { Moment } from "moment";
import "react-dates/lib/css/_datepicker.css";
export declare type InputProps = {
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
export declare type OutputProps = InputProps & {
    updateRange: any;
    setFocusedInput: any;
    focusedInput: any;
};
declare const _default: React.ComponentClass<InputProps, any>;
export default _default;
