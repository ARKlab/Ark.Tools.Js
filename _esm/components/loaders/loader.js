"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./loader.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader(_ref) {
  var load = _ref.load,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? "arkLoader" : _ref$id,
      loadIcon = _ref.loadIcon;
  return <div className={"loadOverlay ".concat(load ? "spin" : "")} id={id}>
    <div className="loadContainer">
      <i className={loadIcon} />
    </div>
  </div>;
};

var _default = Loader;
exports.default = _default;