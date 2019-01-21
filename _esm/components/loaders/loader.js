import React from "react";
import "./loader.scss";

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

export default Loader;