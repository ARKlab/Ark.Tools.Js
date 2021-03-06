/// <reference types="react" />
declare const ConfigModal: ({ open, id, title, modalClass, headerClass, bodyClass, footerClass, closeModal, modalBody, modalFooter }: {
    open: boolean;
    id?: string | undefined;
    title?: string | undefined;
    modalClass?: string | undefined;
    headerClass?: string | undefined;
    bodyClass?: string | undefined;
    footerClass?: string | undefined;
    closeModal?: any;
    modalBody?: JSX.Element | undefined;
    modalFooter?: JSX.Element | undefined;
}) => JSX.Element;
export default ConfigModal;
