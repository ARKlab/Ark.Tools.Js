"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSelect = _interopRequireWildcard(require("react-select"));

var R = _interopRequireWildcard(require("ramda"));

var _reactCustomScrollbars = _interopRequireDefault(require("react-custom-scrollbars"));

require("./dropdown.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop("value")));

var sortOptionsFunc = function sortOptionsFunc(_ref) {
  var options = _ref.options,
      sortOptions = _ref.sortOptions;
  return sortOptions ? sortByNameCaseInsensitive(options) : options;
};

var ScrollbarsMenu = function ScrollbarsMenu(props) {
  return <_reactCustomScrollbars.default autoHeight universal={true} renderTrackHorizontal={function (p) {
    return <div {...p} style={{
      display: "none"
    }} className="track-horizontal" />;
  }} renderThumbHorizontal={function (vals) {
    return <div {...vals} className="thumb-horizontal" />;
  }} renderThumbVertical={function (vals) {
    return <div {...vals} className="thumb-vertical" />;
  }}>
    {props.children}
  </_reactCustomScrollbars.default>;
};

var Menu = function Menu(props) {
  return <_reactSelect.components.Menu {...props}>
      {props.menuShouldScrollIntoView ? <ScrollbarsMenu {...props} /> : <div className="arkSelectBody">{props.children}</div>}
    </_reactSelect.components.Menu>;
};

var Dropdown = function Dropdown(_ref2) {
  var labelName = _ref2.labelName,
      selectName = _ref2.selectName,
      update = _ref2.update,
      value = _ref2.value,
      options = _ref2.options,
      _ref2$sortOptions = _ref2.sortOptions,
      sortOptions = _ref2$sortOptions === void 0 ? false : _ref2$sortOptions,
      _ref2$isMulti = _ref2.isMulti,
      isMulti = _ref2$isMulti === void 0 ? false : _ref2$isMulti,
      _ref2$customScrollBar = _ref2.customScrollBars,
      customScrollBars = _ref2$customScrollBar === void 0 ? false : _ref2$customScrollBar,
      _ref2$isDisabled = _ref2.isDisabled,
      isDisabled = _ref2$isDisabled === void 0 ? false : _ref2$isDisabled,
      _ref2$isSearchable = _ref2.isSearchable,
      isSearchable = _ref2$isSearchable === void 0 ? false : _ref2$isSearchable,
      _ref2$isClearable = _ref2.isClearable,
      isClearable = _ref2$isClearable === void 0 ? false : _ref2$isClearable,
      _ref2$closeMenuOnSele = _ref2.closeMenuOnSelect,
      closeMenuOnSelect = _ref2$closeMenuOnSele === void 0 ? false : _ref2$closeMenuOnSele,
      _ref2$noOptionsMessag = _ref2.noOptionsMessage,
      noOptionsMessage = _ref2$noOptionsMessag === void 0 ? "No Options" : _ref2$noOptionsMessag,
      _ref2$placeholder = _ref2.placeholder,
      placeholder = _ref2$placeholder === void 0 ? "Select..." : _ref2$placeholder;
  return <>
    {labelName ? <label htmlFor="select">
        <b>{labelName}</b>
      </label> : null}
    <_reactSelect.default isMulti={isMulti} className="arkSelect" classNamePrefix="arkSelect" name={selectName} value={value} onChange={update} options={sortOptionsFunc({
      options: options,
      sortOptions: sortOptions
    })} isDisabled={isDisabled} isSearchable={isSearchable} isClearable={isClearable} menuShouldScrollIntoView={customScrollBars} closeMenuOnSelect={closeMenuOnSelect} noOptionsMessage={function () {
      return noOptionsMessage;
    }} components={{
      Menu: Menu
    }} placeholder={placeholder} />
  </>;
};

var _default = Dropdown;
exports.default = _default;