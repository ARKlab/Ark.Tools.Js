"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./modal.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfigModal = function ConfigModal(_ref) {
  var open = _ref.open,
      id = _ref.id,
      title = _ref.title,
      headerClass = _ref.headerClass,
      bodyClass = _ref.bodyClass,
      footerClass = _ref.footerClass,
      closeModal = _ref.closeModal,
      modalBody = _ref.modalBody,
      clear = _ref.clear,
      filter = _ref.filter,
      disableFilter = _ref.disableFilter;
  return <div className={"modal ".concat(open ? "appear" : "")} id={id} role="dialog" aria-hidden="true">
    <div className={open ? "modalOverlay" : ""} onClick={closeModal} />
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className={"modal-header ".concat(headerClass)}>
          <h5 className="modal-title">{title}</h5>
        </div>
        <div className={"modal-body ".concat(bodyClass)}>{modalBody}</div>
        <div className={"modal-footer ".concat(footerClass)}>
          <button type="button" className="btn btn-default filter cancelFilter" onClick={closeModal}>
            Cancel
          </button>
          <button type="button" className="btn btn-danger filter clearFilter" onClick={clear}>
            Clear
          </button>
          <button type="button" className="btn btn-danger filter filterSubmit" onClick={filter} disabled={disableFilter}>
            Filter
          </button>
        </div>
      </div>
    </div>
  </div>;
};

var _default = ConfigModal;
exports.default = _default;