/// <reference types="react" />
import "./dropdown.scss";
declare const Dropdown: ({ labelName, selectName, update, value, options, sortOptions, isMulti, customScrollBars, isDisabled, isSearchable, isClearable, closeMenuOnSelect, noOptionsMessage, placeholder }: {
    labelName?: string | undefined;
    selectName: string;
    value: any[];
    update: any;
    options: any[];
    sortOptions?: boolean | undefined;
    isMulti?: boolean | undefined;
    customScrollBars?: boolean | undefined;
    isDisabled?: boolean | undefined;
    isSearchable?: boolean | undefined;
    isClearable?: boolean | undefined;
    closeMenuOnSelect?: boolean | undefined;
    noOptionsMessage?: string | undefined;
    placeholder?: string | undefined;
}) => JSX.Element;
export default Dropdown;
