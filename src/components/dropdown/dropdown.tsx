import React from "react";
import Select, { components } from "react-select";
import * as R from "ramda";
import Scrollbars from "react-custom-scrollbars";

const sortByNameCaseInsensitive = R.sortBy(
  R.compose(
    R.toLower,
    R.prop<any, string>("value")
  )
);

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

const sortOptionsFunc = ({
  options,
  sortOptions
}: {
  options: any[];
  sortOptions: boolean;
}) => (sortOptions ? sortByNameCaseInsensitive(options) : options);

const ScrollbarsMenu = (props: any) => (
  <Scrollbars
    autoHeight
    universal={true}
    renderTrackHorizontal={p => (
      <div {...p} style={{ display: "none" }} className="track-horizontal" />
    )}
    renderThumbHorizontal={vals => (
      <div {...vals} className="thumb-horizontal" />
    )}
    renderThumbVertical={vals => <div {...vals} className="thumb-vertical" />}
  >
    {props.children}
  </Scrollbars>
);
const Menu = (props: any) => {
  return (
    <components.Menu {...props}>
      {props.menuShouldScrollIntoView ? (
        <ScrollbarsMenu {...props} />
      ) : (
        <div className="arkSelectBody">{props.children}</div>
      )}
    </components.Menu>
  );
};

const Dropdown = ({
  labelName,
  selectName,
  change,
  value,
  options,
  sortOptions = false,
  isMulti = false,
  customScrollBars = false,
  isDisabled = false,
  isSearchable = false,
  isClearable = false,
  closeMenuOnSelect = true,
  noOptionsMessage = "No Options",
  requiredFieldText,
  placeholder = "Select..."
}: {
  labelName?: string;
  selectName: string;
  value: any[];
  change: any;
  options: any[];
  sortOptions?: boolean;
  isMulti?: boolean;
  customScrollBars?: boolean;
  isDisabled?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  closeMenuOnSelect?: boolean;
  requiredFieldText?: string;
  noOptionsMessage?: string;
  placeholder?: string;
}) => (
  <>
    {!R.isEmpty(labelName) && R.isEmpty(requiredFieldText) ? (
      <OnlyLabelName labelName={labelName} />
    ) : null}
    {!R.isEmpty(labelName) && !R.isEmpty(requiredFieldText) ? (
      <RequiredLabelName
        labelName={labelName}
        requiredFieldText={requiredFieldText}
      />
    ) : null}
    <Select
      isMulti={isMulti}
      className="arkSelect"
      classNamePrefix="arkSelect"
      name={selectName}
      value={value}
      onChange={change}
      options={sortOptionsFunc({ options, sortOptions })}
      isDisabled={isDisabled}
      isSearchable={isSearchable}
      isClearable={isClearable}
      menuShouldScrollIntoView={customScrollBars}
      closeMenuOnSelect={closeMenuOnSelect}
      noOptionsMessage={() => noOptionsMessage}
      components={{ Menu }}
      placeholder={placeholder}
    />
  </>
);

export default Dropdown;
