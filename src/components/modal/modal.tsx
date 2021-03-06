import React from "react";

const ConfigModal = ({
  open,
  id="arkModal",
  title,
  modalClass,
  headerClass,
  bodyClass,
  footerClass,
  closeModal,
  modalBody,
  modalFooter
}: {
  open: boolean;
  id?: string;
  title?: string;
  modalClass?: string;
  headerClass?: string;
  bodyClass?: string;
  footerClass?: string;
  closeModal?: any;
  modalBody?: JSX.Element;
  modalFooter?: JSX.Element;
}) => (
  <div
    className={`modal ${open ? "appear" : ""}`}
    id={id}
    role="dialog"
    aria-hidden="true"
  >
    <div className={open ? "modalOverlay" : ""} onClick={closeModal} />
    <div className={`modal-dialog ${modalClass}`} role="document">
      <div className="modal-content">
        <div className={`modal-header ${headerClass}`}>
          <h5 className="modal-title">{title}</h5>
        </div>
        <div className={`modal-body ${bodyClass}`}>{modalBody}</div>
        <div className={`modal-footer ${footerClass}`}>{modalFooter}</div>
      </div>
    </div>
  </div>
);

export default ConfigModal;
