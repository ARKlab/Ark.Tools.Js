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
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? "arkModal" : _ref$id,
      title = _ref.title,
      modalClass = _ref.modalClass,
      headerClass = _ref.headerClass,
      bodyClass = _ref.bodyClass,
      footerClass = _ref.footerClass,
      closeModal = _ref.closeModal,
      modalBody = _ref.modalBody,
      modalFooter = _ref.modalFooter;
  return <div className={"modal ".concat(open ? "appear" : "")} id={id} role="dialog" aria-hidden="true">
    <div className={open ? "modalOverlay" : ""} onClick={closeModal} />
    <div className={"modal-dialog ".concat(modalClass)} role="document">
      <div className="modal-content">
        <div className={"modal-header ".concat(headerClass)}>
          <h5 className="modal-title">{title}</h5>
        </div>
        <div className={"modal-body ".concat(bodyClass)}>{modalBody}</div>
        <div className={"modal-footer ".concat(footerClass)}>{modalFooter}</div>
      </div>
    </div>
  </div>;
};

var _default = ConfigModal;
exports.default = _default;