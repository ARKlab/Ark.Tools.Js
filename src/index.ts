import Loader from "./components/loaders/loader";
import Modal from "./components/modal/modal";
import FilterModal from "./components/modal/flterModal";
import Dropdown from "./components/dropdown/dropdown";
import DateRange from "./components/dateRange/dateRange";
import DatePicker from "./components/datePicker/datePicker";
import TextArea from "./components/textArea/textArea";
import NumericInput from "./components/numericInput/numericInput";
import TextInput from "./components/textInput/textInput";
import diff from "./utils/diff/diff";
import diffExcelBuilder from "./utils/diff/diffExcelBuilder";
import excelBuilder from "./utils/excelBuilder/excelBuilder";
import buildRequest from "./utils/mappingTools/buildRequest";
import commitModification from "./utils/mappingTools/commitModification";
import deleteItem from "./utils/mappingTools/deleteItem";
import removeModification from "./utils/mappingTools/removeModification";

const MappingTools = {
  buildRequest,
  commitModification,
  deleteItem,
  removeModification
};

const DiffTools = {
  diff,
  diffExcelBuilder
};

export {
  MappingTools,
  DiffTools,
  excelBuilder,
  Loader,
  Modal,
  FilterModal,
  Dropdown,
  DateRange,
  DatePicker,
  TextArea,
  NumericInput,
  TextInput
};
