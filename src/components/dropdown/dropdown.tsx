import React from "react";
import Select, { components } from "react-select";
import * as R from "ramda";
import Scrollbars from "react-custom-scrollbars";
import "./dropdown.scss";

const sortByNameCaseInsensitive = R.sortBy(
  R.compose(
    R.toLower,
    R.prop<any, string>("value")
  )
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
  update,
  value,
  options,
  sortOptions = false,
  isMulti = false,
  customScrollBars = false,
  isDisabled = false,
  isSearchable = false,
  isClearable = false,
  closeMenuOnSelect = false,
  noOptionsMessage = "No Options",
  placeholder = "Select..."
}: {
  labelName?: string;
  selectName: string;
  value: any[];
  update: any;
  options: any[];
  sortOptions?: boolean;
  isMulti?: boolean;
  customScrollBars?: boolean;
  isDisabled?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  closeMenuOnSelect?: boolean;
  noOptionsMessage?: string;
  placeholder?: string;
}) => (
  <>
    {labelName ? (
      <label htmlFor="select">
        <b>{labelName}</b>
      </label>
    ) : null}
    <Select
      isMulti={isMulti}
      className="arkSelect"
      classNamePrefix="arkSelect"
      name={selectName}
      value={value}
      onChange={update}
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
