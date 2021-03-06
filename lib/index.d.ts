/// <reference types="react" />
/// <reference types="moment" />
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
    commitModification: ({ pks, errMsg, modalData, tableData }: {
        pks: any;
        errMsg: string;
        modalData: any;
        tableData: any;
    }) => any;
    commitPeriodiModification: ({ pks, errMsg, modalData, tableData, periodo, periodoKeys, periodoErrorMsg }: {
        pks: any;
        errMsg: string;
        modalData: any;
        tableData: any;
        periodo: any;
        periodoKeys: any;
        periodoErrorMsg: any;
    }) => any;
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
declare const ArkComponets: {
    Loader: ({ load, id, loadIcon }: {
        load: boolean;
        id: string;
        loadIcon: string;
    }) => JSX.Element;
    Modal: ({ open, id, title, modalClass, headerClass, bodyClass, footerClass, closeModal, modalBody, modalFooter }: {
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
    FilterModal: ({ open, id, title, headerClass, bodyClass, footerClass, closeModal, modalBody, clear, filter, disableFilter }: {
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
    Dropdown: ({ labelName, selectName, change, value, options, sortOptions, isMulti, customScrollBars, isDisabled, isSearchable, isClearable, closeMenuOnSelect, noOptionsMessage, requiredFieldText, placeholder }: {
        labelName?: string | undefined;
        selectName: string;
        value: any[];
        change: any;
        options: any[];
        sortOptions?: boolean | undefined;
        isMulti?: boolean | undefined;
        customScrollBars?: boolean | undefined;
        isDisabled?: boolean | undefined;
        isSearchable?: boolean | undefined;
        isClearable?: boolean | undefined;
        closeMenuOnSelect?: boolean | undefined;
        requiredFieldText?: string | undefined;
        noOptionsMessage?: string | undefined;
        placeholder?: string | undefined;
    }) => JSX.Element;
    DateRange: import("react").ComponentClass<import("./components/dateRange/dateRange").InputProps, any>;
    DatePicker: import("react").ComponentClass<import("./components/datePicker/datePicker").InputProps, any>;
    TextArea: ({ update, value, areaClassName, id, labelName, readOnly, disabled, autoComplete, minLength, maxLength, requiredFieldText, placeholder }: import("./components/textArea/textArea").InputProps) => JSX.Element;
    NumericInput: import("react").ComponentClass<import("./components/numericInput/numericInput").InputProps, any>;
    TextInput: import("react").ComponentClass<import("./components/textInput/textInput").InputProps, any>;
};
declare const ArkReducers: {
    filterReducer: ({ key, filterState, filters, filterOrig }: {
        key: string;
        filterState?: boolean | undefined;
        filters?: {} | undefined;
        filterOrig?: any[] | undefined;
    }) => {
        tableOptionsReducer: (state: {
            filterState: boolean;
            filters: {};
            filterOrig: any[];
        } | undefined, action: any) => {
            filters: any;
            filterState: boolean;
            filterOrig: any[];
        } | {
            filterState: boolean;
            filterOrig: {};
            filters: {};
        };
        setFilters: ({ filters }: {
            filters: any;
        }) => {
            type: string;
            filters: any;
        };
        openFilter: () => {
            type: string;
        };
        closeFilter: () => {
            type: string;
        };
        clearFilter: () => {
            type: string;
        };
        applyFilter: () => {
            type: string;
        };
        clearAllSettings: () => {
            type: string;
        };
    };
    tableFilterReducer: ({ key, data, pageSize, pageSizeList, pageNo, sortColumn, columnFilters, tableCount, filterState, filters, filterOrig, dateRange, datePicker }: {
        key: string;
        data?: any;
        pageSize?: number | undefined;
        pageSizeList?: any[] | undefined;
        pageNo?: number | undefined;
        sortColumn?: string | null | undefined;
        columnFilters?: any[] | undefined;
        tableCount?: number | undefined;
        filterState?: boolean | undefined;
        filters?: {} | undefined;
        filterOrig?: any[] | undefined;
        dateRange?: {
            startDate: import("moment").Moment | null;
            endDate: import("moment").Moment | null;
        } | null | undefined;
        datePicker?: import("moment").Moment | null | undefined;
    }) => {
        tableOptionsReducer: (state: {
            data: any;
            pageSize: number;
            pageSizeList: any[];
            pageNo: number;
            sortColumn: string | null;
            columnFilters: any[];
            tableCount: number;
            filterState: boolean;
            filters: {};
            filterOrig: any[];
            dateRange: {
                startDate: import("moment").Moment | null;
                endDate: import("moment").Moment | null;
            } | null;
            datePicker: import("moment").Moment | null;
        } | undefined, action: any) => {
            pageSize: any;
            data: any;
            pageSizeList: any[];
            pageNo: number;
            sortColumn: string | null;
            columnFilters: any[];
            tableCount: number;
            filterState: boolean;
            filters: {};
            filterOrig: any[];
            dateRange: {
                startDate: import("moment").Moment | null;
                endDate: import("moment").Moment | null;
            } | null;
            datePicker: import("moment").Moment | null;
        } | {
            pageNo: any;
            data: any;
            pageSize: number;
            pageSizeList: any[];
            sortColumn: string | null;
            columnFilters: any[];
            tableCount: number;
            filterState: boolean;
            filters: {};
            filterOrig: any[];
            dateRange: {
                startDate: import("moment").Moment | null;
                endDate: import("moment").Moment | null;
            } | null;
            datePicker: import("moment").Moment | null;
        } | {
            columnFilters: any;
            data: any;
            pageSize: number;
            pageSizeList: any[];
            pageNo: number;
            sortColumn: string | null;
            tableCount: number;
            filterState: boolean;
            filters: {};
            filterOrig: any[];
            dateRange: {
                startDate: import("moment").Moment | null;
                endDate: import("moment").Moment | null;
            } | null;
            datePicker: import("moment").Moment | null;
        } | {
            tableCount: any;
            data: any;
            pageSize: number;
            pageSizeList: any[];
            pageNo: number;
            sortColumn: string | null;
            columnFilters: any[];
            filterState: boolean;
            filters: {};
            filterOrig: any[];
            dateRange: {
                startDate: import("moment").Moment | null;
                endDate: import("moment").Moment | null;
            } | null;
            datePicker: import("moment").Moment | null;
        } | {
            filters: any;
            data: any;
            pageSize: number;
            pageSizeList: any[];
            pageNo: number;
            sortColumn: string | null;
            columnFilters: any[];
            tableCount: number;
            filterState: boolean;
            filterOrig: any[];
            dateRange: {
                startDate: import("moment").Moment | null;
                endDate: import("moment").Moment | null;
            } | null;
            datePicker: import("moment").Moment | null;
        } | {
            filterState: boolean;
            filterOrig: {};
            data: any;
            pageSize: number;
            pageSizeList: any[];
            pageNo: number;
            sortColumn: string | null;
            columnFilters: any[];
            tableCount: number;
            filters: {};
            dateRange: {
                startDate: import("moment").Moment | null;
                endDate: import("moment").Moment | null;
            } | null;
            datePicker: import("moment").Moment | null;
        } | {
            pageNo: number;
            dateRange: {
                startDate: any;
                endDate: any;
            };
            data: any;
            pageSize: number;
            pageSizeList: any[];
            sortColumn: string | null;
            columnFilters: any[];
            tableCount: number;
            filterState: boolean;
            filters: {};
            filterOrig: any[];
            datePicker: import("moment").Moment | null;
        } | {
            pageNo: number;
            datePicker: any;
            data: any;
            pageSize: number;
            pageSizeList: any[];
            sortColumn: string | null;
            columnFilters: any[];
            tableCount: number;
            filterState: boolean;
            filters: {};
            filterOrig: any[];
            dateRange: {
                startDate: import("moment").Moment | null;
                endDate: import("moment").Moment | null;
            } | null;
        };
        setData: ({ data }: {
            data: any;
        }) => {
            type: string;
            data: any;
        };
        clearData: () => {
            type: string;
        };
        setPageSize: ({ pageSize }: {
            pageSize: number;
        }) => {
            type: string;
            pageSize: number;
        };
        setPageNo: ({ pageNo }: {
            pageNo: number;
        }) => {
            type: string;
            pageNo: number;
        };
        setSortColumn: ({ col, dir }: {
            col: string;
            dir: string;
        }) => {
            type: string;
            SET_SORT_COLUMN: string;
        };
        setColumnFilters: ({ date }: {
            date: import("moment").Moment | null;
        }) => {
            type: string;
            date: import("moment").Moment | null;
        };
        clearColumnFilters: () => {
            type: string;
        };
        setTableCount: ({ tableCount }: {
            tableCount: number;
        }) => {
            type: string;
            tableCount: number;
        };
        resetTableSettings: () => {
            type: string;
        };
        setFilters: ({ filters }: {
            filters: any;
        }) => {
            type: string;
            filters: any;
        };
        openFilter: () => {
            type: string;
        };
        closeFilter: () => {
            type: string;
        };
        clearFilter: () => {
            type: string;
        };
        applyFilter: () => {
            type: string;
        };
        clearAllSettings: () => {
            type: string;
        };
        setDateRange: ({ startDate, endDate }: {
            startDate: import("moment").Moment | null;
            endDate: import("moment").Moment | null;
        }) => {
            type: string;
            startDate: import("moment").Moment | null;
            endDate: import("moment").Moment | null;
        };
        clearDateRange: () => {
            type: string;
        };
        setDatePicker: ({ date }: {
            date: import("moment").Moment | null;
        }) => {
            type: string;
            date: import("moment").Moment | null;
        };
        clearDatePicker: () => {
            type: string;
        };
    };
    tableReducer: ({ key, data, pageSize, pageSizeList, pageNo, sortColumn, columnFilters, tableCount }: {
        key: string;
        data?: any;
        pageSize?: number | undefined;
        pageSizeList?: any[] | undefined;
        pageNo?: number | undefined;
        sortColumn?: string | null | undefined;
        columnFilters?: any[] | undefined;
        tableCount?: number | undefined;
    }) => {
        tableOptionsReducer: (state: {
            data: any;
            pageSize: number;
            pageSizeList: any[];
            pageNo: number;
            sortColumn: string | null;
            columnFilters: any[];
            tableCount: number;
        } | undefined, action: any) => {
            pageSize: any;
            data: any;
            pageSizeList: any[];
            pageNo: number;
            sortColumn: string | null;
            columnFilters: any[];
            tableCount: number;
        } | {
            pageNo: any;
            data: any;
            pageSize: number;
            pageSizeList: any[];
            sortColumn: string | null;
            columnFilters: any[];
            tableCount: number;
        } | {
            columnFilters: any;
            data: any;
            pageSize: number;
            pageSizeList: any[];
            pageNo: number;
            sortColumn: string | null;
            tableCount: number;
        } | {
            tableCount: any;
            data: any;
            pageSize: number;
            pageSizeList: any[];
            pageNo: number;
            sortColumn: string | null;
            columnFilters: any[];
        };
        setData: ({ data }: {
            data: any;
        }) => {
            type: string;
            data: any;
        };
        clearData: () => {
            type: string;
        };
        setPageSize: ({ pageSize }: {
            pageSize: number;
        }) => {
            type: string;
            pageSize: number;
        };
        setPageNo: ({ pageNo }: {
            pageNo: number;
        }) => {
            type: string;
            pageNo: number;
        };
        setSortColumn: ({ col, dir }: {
            col: string;
            dir: string;
        }) => {
            type: string;
            SET_SORT_COLUMN: string;
        };
        setColumnFilters: ({ date }: {
            date: import("moment").Moment | null;
        }) => {
            type: string;
            date: import("moment").Moment | null;
        };
        clearColumnFilters: () => {
            type: string;
        };
        setTableCount: ({ tableCount }: {
            tableCount: number;
        }) => {
            type: string;
            tableCount: number;
        };
        resetTableSettings: () => {
            type: string;
        };
    };
};
declare const Request: {
    queryBuilder: ({ filters, columnFilterName }: {
        filters: any;
        columnFilterName?: string | undefined;
    }) => string;
};
export { MappingTools, DiffTools, ArkComponets, ArkReducers, excelBuilder, Request };
