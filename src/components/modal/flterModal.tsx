import React from "react";

const ConfigModal = ({
  open,
  id,
  title,
  headerClass,
  bodyClass,
  footerClass,
  closeModal,
  modalBody,
  clear,
  filter,
  disableFilter
}: {
  open: boolean;
  id?: string;
  title?: string;
  headerClass?: string;
  bodyClass?: string;
  footerClass?: string;
  closeModal?: any;
  modalBody?: JSX.Element;
  clear: any;
  filter: any;
  disableFilter?: any;
}) => (
  <div
    className={`modal ${open ? "appear" : ""}`}
    id={id}
    role="dialog"
    aria-hidden="true"
  >
    <div className={open ? "modalOverlay" : ""} onClick={closeModal} />
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className={`modal-header ${headerClass}`}>
          <h5 className="modal-title">{title}</h5>
        </div>
        <div className={`modal-body ${bodyClass}`}>{modalBody}</div>
        <div className={`modal-footer ${footerClass}`}>
          <button
            type="button"
            className="btn btn-default filter cancelFilter"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-danger filter clearFilter"
            onClick={clear}
          >
            Clear
          </button>
          <button
            type="button"
            className="btn btn-danger filter filterSubmit"
            onClick={filter}
            disabled={disableFilter}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ConfigModal;
