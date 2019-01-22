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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop("value")));

var sortOptionsFunc = function sortOptionsFunc(_ref) {
  var options = _ref.options,
      sortOptions = _ref.sortOptions;
  return sortOptions ? sortByNameCaseInsensitive(options) : options;
};

var ScrollbarsMenu = function ScrollbarsMenu(props) {
  return _react.default.createElement(_reactCustomScrollbars.default, {
    autoHeight: true,
    universal: true,
    renderTrackHorizontal: function renderTrackHorizontal(p) {
      return _react.default.createElement("div", _extends({}, p, {
        style: {
          display: "none"
        },
        className: "track-horizontal"
      }));
    },
    renderThumbHorizontal: function renderThumbHorizontal(vals) {
      return _react.default.createElement("div", _extends({}, vals, {
        className: "thumb-horizontal"
      }));
    },
    renderThumbVertical: function renderThumbVertical(vals) {
      return _react.default.createElement("div", _extends({}, vals, {
        className: "thumb-vertical"
      }));
    }
  }, props.children);
};

var Menu = function Menu(props) {
  return _react.default.createElement(_reactSelect.components.Menu, props, props.menuShouldScrollIntoView ? _react.default.createElement(ScrollbarsMenu, props) : _react.default.createElement("div", {
    className: "arkSelectBody"
  }, props.children));
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
      _noOptionsMessage = _ref2$noOptionsMessag === void 0 ? "No Options" : _ref2$noOptionsMessag,
      _ref2$placeholder = _ref2.placeholder,
      placeholder = _ref2$placeholder === void 0 ? "Select..." : _ref2$placeholder;

  return _react.default.createElement(_react.default.Fragment, null, labelName ? _react.default.createElement("label", {
    htmlFor: "select"
  }, _react.default.createElement("b", null, labelName)) : null, _react.default.createElement(_reactSelect.default, {
    isMulti: isMulti,
    className: "arkSelect",
    classNamePrefix: "arkSelect",
    name: selectName,
    value: value,
    onChange: update,
    options: sortOptionsFunc({
      options: options,
      sortOptions: sortOptions
    }),
    isDisabled: isDisabled,
    isSearchable: isSearchable,
    isClearable: isClearable,
    menuShouldScrollIntoView: customScrollBars,
    closeMenuOnSelect: closeMenuOnSelect,
    noOptionsMessage: function noOptionsMessage() {
      return _noOptionsMessage;
    },
    components: {
      Menu: Menu
    },
    placeholder: placeholder
  }));
};

var _default = Dropdown;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLnRzeCJdLCJuYW1lcyI6WyJzb3J0QnlOYW1lQ2FzZUluc2Vuc2l0aXZlIiwiUiIsInNvcnRCeSIsImNvbXBvc2UiLCJ0b0xvd2VyIiwicHJvcCIsInNvcnRPcHRpb25zRnVuYyIsIm9wdGlvbnMiLCJzb3J0T3B0aW9ucyIsIlNjcm9sbGJhcnNNZW51IiwicHJvcHMiLCJwIiwiZGlzcGxheSIsInZhbHMiLCJjaGlsZHJlbiIsIk1lbnUiLCJtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXciLCJEcm9wZG93biIsImxhYmVsTmFtZSIsInNlbGVjdE5hbWUiLCJ1cGRhdGUiLCJ2YWx1ZSIsImlzTXVsdGkiLCJjdXN0b21TY3JvbGxCYXJzIiwiaXNEaXNhYmxlZCIsImlzU2VhcmNoYWJsZSIsImlzQ2xlYXJhYmxlIiwiY2xvc2VNZW51T25TZWxlY3QiLCJub09wdGlvbnNNZXNzYWdlIiwicGxhY2Vob2xkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSx5QkFBeUIsR0FBR0MsQ0FBQyxDQUFDQyxNQUFGLENBQ2hDRCxDQUFDLENBQUNFLE9BQUYsQ0FDRUYsQ0FBQyxDQUFDRyxPQURKLEVBRUVILENBQUMsQ0FBQ0ksSUFBRixDQUFvQixPQUFwQixDQUZGLENBRGdDLENBQWxDOztBQU9BLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxNQUN0QkMsT0FEc0IsUUFDdEJBLE9BRHNCO0FBQUEsTUFFdEJDLFdBRnNCLFFBRXRCQSxXQUZzQjtBQUFBLFNBTWpCQSxXQUFXLEdBQUdSLHlCQUF5QixDQUFDTyxPQUFELENBQTVCLEdBQXdDQSxPQU5sQztBQUFBLENBQXhCOztBQVFBLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRDtBQUFBLFNBQ3JCLDZCQUFDLDhCQUFEO0FBQ0UsSUFBQSxV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QUFBQSxJQUFJLEVBQUpBO0FBQUYsS0FkZDtBQWVFLElBQUEsV0FBVyxFQUFFYztBQWZmLElBTkYsQ0EvQmU7QUFBQSxDQUFqQjs7ZUF5RGVaLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTZWxlY3QsIHsgY29tcG9uZW50cyB9IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0ICogYXMgUiBmcm9tIFwicmFtZGFcIjtcclxuaW1wb3J0IFNjcm9sbGJhcnMgZnJvbSBcInJlYWN0LWN1c3RvbS1zY3JvbGxiYXJzXCI7XHJcbmltcG9ydCBcIi4vZHJvcGRvd24uc2Nzc1wiO1xyXG5cclxuY29uc3Qgc29ydEJ5TmFtZUNhc2VJbnNlbnNpdGl2ZSA9IFIuc29ydEJ5KFxyXG4gIFIuY29tcG9zZShcclxuICAgIFIudG9Mb3dlcixcclxuICAgIFIucHJvcDxhbnksIHN0cmluZz4oXCJ2YWx1ZVwiKVxyXG4gIClcclxuKTtcclxuXHJcbmNvbnN0IHNvcnRPcHRpb25zRnVuYyA9ICh7XHJcbiAgb3B0aW9ucyxcclxuICBzb3J0T3B0aW9uc1xyXG59OiB7XHJcbiAgb3B0aW9uczogYW55W107XHJcbiAgc29ydE9wdGlvbnM6IGJvb2xlYW47XHJcbn0pID0+IChzb3J0T3B0aW9ucyA/IHNvcnRCeU5hbWVDYXNlSW5zZW5zaXRpdmUob3B0aW9ucykgOiBvcHRpb25zKTtcclxuXHJcbmNvbnN0IFNjcm9sbGJhcnNNZW51ID0gKHByb3BzOiBhbnkpID0+IChcclxuICA8U2Nyb2xsYmFyc1xyXG4gICAgYXV0b0hlaWdodFxyXG4gICAgdW5pdmVyc2FsPXt0cnVlfVxyXG4gICAgcmVuZGVyVHJhY2tIb3Jpem9udGFsPXtwID0+IChcclxuICAgICAgPGRpdiB7Li4ucH0gc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0gY2xhc3NOYW1lPVwidHJhY2staG9yaXpvbnRhbFwiIC8+XHJcbiAgICApfVxyXG4gICAgcmVuZGVyVGh1bWJIb3Jpem9udGFsPXt2YWxzID0+IChcclxuICAgICAgPGRpdiB7Li4udmFsc30gY2xhc3NOYW1lPVwidGh1bWItaG9yaXpvbnRhbFwiIC8+XHJcbiAgICApfVxyXG4gICAgcmVuZGVyVGh1bWJWZXJ0aWNhbD17dmFscyA9PiA8ZGl2IHsuLi52YWxzfSBjbGFzc05hbWU9XCJ0aHVtYi12ZXJ0aWNhbFwiIC8+fVxyXG4gID5cclxuICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICA8L1Njcm9sbGJhcnM+XHJcbik7XHJcbmNvbnN0IE1lbnUgPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Y29tcG9uZW50cy5NZW51IHsuLi5wcm9wc30+XHJcbiAgICAgIHtwcm9wcy5tZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcgPyAoXHJcbiAgICAgICAgPFNjcm9sbGJhcnNNZW51IHsuLi5wcm9wc30gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFya1NlbGVjdEJvZHlcIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2NvbXBvbmVudHMuTWVudT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgRHJvcGRvd24gPSAoe1xyXG4gIGxhYmVsTmFtZSxcclxuICBzZWxlY3ROYW1lLFxyXG4gIHVwZGF0ZSxcclxuICB2YWx1ZSxcclxuICBvcHRpb25zLFxyXG4gIHNvcnRPcHRpb25zID0gZmFsc2UsXHJcbiAgaXNNdWx0aSA9IGZhbHNlLFxyXG4gIGN1c3RvbVNjcm9sbEJhcnMgPSBmYWxzZSxcclxuICBpc0Rpc2FibGVkID0gZmFsc2UsXHJcbiAgaXNTZWFyY2hhYmxlID0gZmFsc2UsXHJcbiAgaXNDbGVhcmFibGUgPSBmYWxzZSxcclxuICBjbG9zZU1lbnVPblNlbGVjdCA9IGZhbHNlLFxyXG4gIG5vT3B0aW9uc01lc3NhZ2UgPSBcIk5vIE9wdGlvbnNcIixcclxuICBwbGFjZWhvbGRlciA9IFwiU2VsZWN0Li4uXCJcclxufToge1xyXG4gIGxhYmVsTmFtZT86IHN0cmluZztcclxuICBzZWxlY3ROYW1lOiBzdHJpbmc7XHJcbiAgdmFsdWU6IGFueVtdO1xyXG4gIHVwZGF0ZTogYW55O1xyXG4gIG9wdGlvbnM6IGFueVtdO1xyXG4gIHNvcnRPcHRpb25zPzogYm9vbGVhbjtcclxuICBpc011bHRpPzogYm9vbGVhbjtcclxuICBjdXN0b21TY3JvbGxCYXJzPzogYm9vbGVhbjtcclxuICBpc0Rpc2FibGVkPzogYm9vbGVhbjtcclxuICBpc1NlYXJjaGFibGU/OiBib29sZWFuO1xyXG4gIGlzQ2xlYXJhYmxlPzogYm9vbGVhbjtcclxuICBjbG9zZU1lbnVPblNlbGVjdD86IGJvb2xlYW47XHJcbiAgbm9PcHRpb25zTWVzc2FnZT86IHN0cmluZztcclxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxufSkgPT4gKFxyXG4gIDw+XHJcbiAgICB7bGFiZWxOYW1lID8gKFxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInNlbGVjdFwiPlxyXG4gICAgICAgIDxiPntsYWJlbE5hbWV9PC9iPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgKSA6IG51bGx9XHJcbiAgICA8U2VsZWN0XHJcbiAgICAgIGlzTXVsdGk9e2lzTXVsdGl9XHJcbiAgICAgIGNsYXNzTmFtZT1cImFya1NlbGVjdFwiXHJcbiAgICAgIGNsYXNzTmFtZVByZWZpeD1cImFya1NlbGVjdFwiXHJcbiAgICAgIG5hbWU9e3NlbGVjdE5hbWV9XHJcbiAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgb25DaGFuZ2U9e3VwZGF0ZX1cclxuICAgICAgb3B0aW9ucz17c29ydE9wdGlvbnNGdW5jKHsgb3B0aW9ucywgc29ydE9wdGlvbnMgfSl9XHJcbiAgICAgIGlzRGlzYWJsZWQ9e2lzRGlzYWJsZWR9XHJcbiAgICAgIGlzU2VhcmNoYWJsZT17aXNTZWFyY2hhYmxlfVxyXG4gICAgICBpc0NsZWFyYWJsZT17aXNDbGVhcmFibGV9XHJcbiAgICAgIG1lbnVTaG91bGRTY3JvbGxJbnRvVmlldz17Y3VzdG9tU2Nyb2xsQmFyc31cclxuICAgICAgY2xvc2VNZW51T25TZWxlY3Q9e2Nsb3NlTWVudU9uU2VsZWN0fVxyXG4gICAgICBub09wdGlvbnNNZXNzYWdlPXsoKSA9PiBub09wdGlvbnNNZXNzYWdlfVxyXG4gICAgICBjb21wb25lbnRzPXt7IE1lbnUgfX1cclxuICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgLz5cclxuICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xyXG4iXX0=