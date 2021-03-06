import React from "react";
export declare type InputProps = {
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
export declare type OutputProps = InputProps & {
    change: any;
};
declare const _default: React.ComponentClass<InputProps, any>;
export default _default;
