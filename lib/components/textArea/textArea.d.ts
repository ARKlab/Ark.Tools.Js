/// <reference types="react" />
export declare type InputProps = {
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
declare const TextBoxInput: ({ update, value, areaClassName, id, labelName, readOnly, disabled, autoComplete, minLength, maxLength, requiredFieldText, placeholder }: InputProps) => JSX.Element;
export default TextBoxInput;
