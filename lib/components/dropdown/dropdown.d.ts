/// <reference types="react" />
declare const Dropdown: ({ labelName, selectName, change, value, options, sortOptions, isMulti, customScrollBars, isDisabled, isSearchable, isClearable, closeMenuOnSelect, noOptionsMessage, requiredFieldText, placeholder }: {
    labelName?: string | undefined;
    selectName: string;
    value: any[];
    change: any;
    options: any[];
    sortOptions?: boolean | undefined;
    isMulti?: boolean | undefined;
    customScrollBars?: boolean | undefined;
    isDisabled?: boolean | undefined;
    isSearchable?: boolean | undefined;
    isClearable?: boolean | undefined;
    closeMenuOnSelect?: boolean | undefined;
    requiredFieldText?: string | undefined;
    noOptionsMessage?: string | undefined;
    placeholder?: string | undefined;
}) => JSX.Element;
export default Dropdown;
