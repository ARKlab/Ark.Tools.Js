/// <reference types="react" />
declare const ConfigModal: ({ open, id, title, headerClass, bodyClass, footerClass, closeModal, modalBody, clear, filter, disableFilter }: {
    open: boolean;
    id?: string | undefined;
    title?: string | undefined;
    headerClass?: string | undefined;
    bodyClass?: string | undefined;
    footerClass?: string | undefined;
    closeModal?: any;
    modalBody?: JSX.Element | undefined;
    clear: any;
    filter: any;
    disableFilter?: any;
}) => JSX.Element;
export default ConfigModal;
