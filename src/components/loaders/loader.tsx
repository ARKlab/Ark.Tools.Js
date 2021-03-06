import React from "react";

const Loader = ({
  load,
  id="arkLoader",
  loadIcon
}: {
  load: boolean;
  id: string;
  loadIcon: string;
}) => (
  <div className={`loadOverlay ${load ? "spin" : ""}`} id={id}>
    <div className="loadContainer">
      <i className={loadIcon} />
    </div>
  </div>
);

export default Loader;
