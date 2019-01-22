"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSelect = _interopRequireWildcard(require("react-select"));

var R = _interopRequireWildcard(require("ramda"));

var _reactCustomScrollbars = _interopRequireDefault(require("react-custom-scrollbars"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLnRzeCJdLCJuYW1lcyI6WyJzb3J0QnlOYW1lQ2FzZUluc2Vuc2l0aXZlIiwiUiIsInNvcnRCeSIsImNvbXBvc2UiLCJ0b0xvd2VyIiwicHJvcCIsInNvcnRPcHRpb25zRnVuYyIsIm9wdGlvbnMiLCJzb3J0T3B0aW9ucyIsIlNjcm9sbGJhcnNNZW51IiwicHJvcHMiLCJwIiwiZGlzcGxheSIsInZhbHMiLCJjaGlsZHJlbiIsIk1lbnUiLCJtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXciLCJEcm9wZG93biIsImxhYmVsTmFtZSIsInNlbGVjdE5hbWUiLCJ1cGRhdGUiLCJ2YWx1ZSIsImlzTXVsdGkiLCJjdXN0b21TY3JvbGxCYXJzIiwiaXNEaXNhYmxlZCIsImlzU2VhcmNoYWJsZSIsImlzQ2xlYXJhYmxlIiwiY2xvc2VNZW51T25TZWxlY3QiLCJub09wdGlvbnNNZXNzYWdlIiwicGxhY2Vob2xkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSx5QkFBeUIsR0FBR0MsQ0FBQyxDQUFDQyxNQUFGLENBQ2hDRCxDQUFDLENBQUNFLE9BQUYsQ0FDRUYsQ0FBQyxDQUFDRyxPQURKLEVBRUVILENBQUMsQ0FBQ0ksSUFBRixDQUFvQixPQUFwQixDQUZGLENBRGdDLENBQWxDOztBQU9BLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxNQUN0QkMsT0FEc0IsUUFDdEJBLE9BRHNCO0FBQUEsTUFFdEJDLFdBRnNCLFFBRXRCQSxXQUZzQjtBQUFBLFNBTWpCQSxXQUFXLEdBQUdSLHlCQUF5QixDQUFDTyxPQUFELENBQTVCLEdBQXdDQSxPQU5sQztBQUFBLENBQXhCOztBQVFBLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRDtBQUFBLFNBQ3JCLDZCQUFDLDhCQUFEO0FBQ0UsSUFBQSxVQUFVLE1B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QUFJLEVBQUpBO0FBQUYsS0FkZDtBQWVFLElBQUEsV0FBVyxFQUFFYztBQWZmLElBTkYsQ0EvQmU7QUFBQSxDQUFqQjs7ZUF5RGVaLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTZWxlY3QsIHsgY29tcG9uZW50cyB9IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0ICogYXMgUiBmcm9tIFwicmFtZGFcIjtcclxuaW1wb3J0IFNjcm9sbGJhcnMgZnJvbSBcInJlYWN0LWN1c3RvbS1zY3JvbGxiYXJzXCI7XHJcblxyXG5jb25zdCBzb3J0QnlOYW1lQ2FzZUluc2Vuc2l0aXZlID0gUi5zb3J0QnkoXHJcbiAgUi5jb21wb3NlKFxyXG4gICAgUi50b0xvd2VyLFxyXG4gICAgUi5wcm9wPGFueSwgc3RyaW5nPihcInZhbHVlXCIpXHJcbiAgKVxyXG4pO1xyXG5cclxuY29uc3Qgc29ydE9wdGlvbnNGdW5jID0gKHtcclxuICBvcHRpb25zLFxyXG4gIHNvcnRPcHRpb25zXHJcbn06IHtcclxuICBvcHRpb25zOiBhbnlbXTtcclxuICBzb3J0T3B0aW9uczogYm9vbGVhbjtcclxufSkgPT4gKHNvcnRPcHRpb25zID8gc29ydEJ5TmFtZUNhc2VJbnNlbnNpdGl2ZShvcHRpb25zKSA6IG9wdGlvbnMpO1xyXG5cclxuY29uc3QgU2Nyb2xsYmFyc01lbnUgPSAocHJvcHM6IGFueSkgPT4gKFxyXG4gIDxTY3JvbGxiYXJzXHJcbiAgICBhdXRvSGVpZ2h0XHJcbiAgICB1bml2ZXJzYWw9e3RydWV9XHJcbiAgICByZW5kZXJUcmFja0hvcml6b250YWw9e3AgPT4gKFxyXG4gICAgICA8ZGl2IHsuLi5wfSBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fSBjbGFzc05hbWU9XCJ0cmFjay1ob3Jpem9udGFsXCIgLz5cclxuICAgICl9XHJcbiAgICByZW5kZXJUaHVtYkhvcml6b250YWw9e3ZhbHMgPT4gKFxyXG4gICAgICA8ZGl2IHsuLi52YWxzfSBjbGFzc05hbWU9XCJ0aHVtYi1ob3Jpem9udGFsXCIgLz5cclxuICAgICl9XHJcbiAgICByZW5kZXJUaHVtYlZlcnRpY2FsPXt2YWxzID0+IDxkaXYgey4uLnZhbHN9IGNsYXNzTmFtZT1cInRodW1iLXZlcnRpY2FsXCIgLz59XHJcbiAgPlxyXG4gICAge3Byb3BzLmNoaWxkcmVufVxyXG4gIDwvU2Nyb2xsYmFycz5cclxuKTtcclxuY29uc3QgTWVudSA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxjb21wb25lbnRzLk1lbnUgey4uLnByb3BzfT5cclxuICAgICAge3Byb3BzLm1lbnVTaG91bGRTY3JvbGxJbnRvVmlldyA/IChcclxuICAgICAgICA8U2Nyb2xsYmFyc01lbnUgey4uLnByb3BzfSAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJrU2VsZWN0Qm9keVwiPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvY29tcG9uZW50cy5NZW51PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBEcm9wZG93biA9ICh7XHJcbiAgbGFiZWxOYW1lLFxyXG4gIHNlbGVjdE5hbWUsXHJcbiAgdXBkYXRlLFxyXG4gIHZhbHVlLFxyXG4gIG9wdGlvbnMsXHJcbiAgc29ydE9wdGlvbnMgPSBmYWxzZSxcclxuICBpc011bHRpID0gZmFsc2UsXHJcbiAgY3VzdG9tU2Nyb2xsQmFycyA9IGZhbHNlLFxyXG4gIGlzRGlzYWJsZWQgPSBmYWxzZSxcclxuICBpc1NlYXJjaGFibGUgPSBmYWxzZSxcclxuICBpc0NsZWFyYWJsZSA9IGZhbHNlLFxyXG4gIGNsb3NlTWVudU9uU2VsZWN0ID0gZmFsc2UsXHJcbiAgbm9PcHRpb25zTWVzc2FnZSA9IFwiTm8gT3B0aW9uc1wiLFxyXG4gIHBsYWNlaG9sZGVyID0gXCJTZWxlY3QuLi5cIlxyXG59OiB7XHJcbiAgbGFiZWxOYW1lPzogc3RyaW5nO1xyXG4gIHNlbGVjdE5hbWU6IHN0cmluZztcclxuICB2YWx1ZTogYW55W107XHJcbiAgdXBkYXRlOiBhbnk7XHJcbiAgb3B0aW9uczogYW55W107XHJcbiAgc29ydE9wdGlvbnM/OiBib29sZWFuO1xyXG4gIGlzTXVsdGk/OiBib29sZWFuO1xyXG4gIGN1c3RvbVNjcm9sbEJhcnM/OiBib29sZWFuO1xyXG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIGlzU2VhcmNoYWJsZT86IGJvb2xlYW47XHJcbiAgaXNDbGVhcmFibGU/OiBib29sZWFuO1xyXG4gIGNsb3NlTWVudU9uU2VsZWN0PzogYm9vbGVhbjtcclxuICBub09wdGlvbnNNZXNzYWdlPzogc3RyaW5nO1xyXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG59KSA9PiAoXHJcbiAgPD5cclxuICAgIHtsYWJlbE5hbWUgPyAoXHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VsZWN0XCI+XHJcbiAgICAgICAgPGI+e2xhYmVsTmFtZX08L2I+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICApIDogbnVsbH1cclxuICAgIDxTZWxlY3RcclxuICAgICAgaXNNdWx0aT17aXNNdWx0aX1cclxuICAgICAgY2xhc3NOYW1lPVwiYXJrU2VsZWN0XCJcclxuICAgICAgY2xhc3NOYW1lUHJlZml4PVwiYXJrU2VsZWN0XCJcclxuICAgICAgbmFtZT17c2VsZWN0TmFtZX1cclxuICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICBvbkNoYW5nZT17dXBkYXRlfVxyXG4gICAgICBvcHRpb25zPXtzb3J0T3B0aW9uc0Z1bmMoeyBvcHRpb25zLCBzb3J0T3B0aW9ucyB9KX1cclxuICAgICAgaXNEaXNhYmxlZD17aXNEaXNhYmxlZH1cclxuICAgICAgaXNTZWFyY2hhYmxlPXtpc1NlYXJjaGFibGV9XHJcbiAgICAgIGlzQ2xlYXJhYmxlPXtpc0NsZWFyYWJsZX1cclxuICAgICAgbWVudVNob3VsZFNjcm9sbEludG9WaWV3PXtjdXN0b21TY3JvbGxCYXJzfVxyXG4gICAgICBjbG9zZU1lbnVPblNlbGVjdD17Y2xvc2VNZW51T25TZWxlY3R9XHJcbiAgICAgIG5vT3B0aW9uc01lc3NhZ2U9eygpID0+IG5vT3B0aW9uc01lc3NhZ2V9XHJcbiAgICAgIGNvbXBvbmVudHM9e3sgTWVudSB9fVxyXG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAvPlxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XHJcbiJdfQ==