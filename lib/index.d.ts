import Loader from "./components/loaders/loader";
import Modal from "./components/modal/modal";
import FilterModal from "./components/modal/flterModal";
import Dropdown from "./components/dropdown/dropdown";
import DateRange from "./components/dateRange/dateRange";
import DatePicker from "./components/datePicker/datePicker";
import TextArea from "./components/textArea/textArea";
import NumericInput from "./components/numericInput/numericInput";
import TextInput from "./components/textInput/textInput";
import excelBuilder from "./utils/excelBuilder/excelBuilder";
declare const MappingTools: {
    buildRequest: ({ data, eTag, type }: {
        data: any;
        eTag: string;
        type: string;
    }) => {
        table: ({} | null)[][];
        eTag: string;
        type: string;
    };
    commitModification: any;
    deleteItem: ({ data, row, pks }: {
        data: any;
        row: any;
        pks: any;
    }) => (t2: {}) => any[];
    removeModification: ({ data, row, pks }: {
        data: any;
        row: any;
        pks: any;
    }) => any;
};
declare const DiffTools: {
    diff: ({ prev, current, primaryKeys, diffKeys, indexed }: {
        prev: any;
        current: any;
        primaryKeys?: any;
        diffKeys?: any;
        indexed?: any;
    }) => any[];
    diffExcelBuilder: ({ prev, curr, list, fileName }: {
        prev: any;
        curr: any;
        list: any;
        fileName: string;
    }) => any;
};
export { MappingTools, DiffTools, excelBuilder, Loader, Modal, FilterModal, Dropdown, DateRange, DatePicker, TextArea, NumericInput, TextInput };
