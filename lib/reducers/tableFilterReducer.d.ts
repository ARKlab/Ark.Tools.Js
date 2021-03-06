import { Moment } from "moment";
declare const tableReducer: ({ key, data, pageSize, pageSizeList, pageNo, sortColumn, columnFilters, tableCount, filterState, filters, filterOrig, dateRange, datePicker }: {
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
        startDate: Moment | null;
        endDate: Moment | null;
    } | null | undefined;
    datePicker?: Moment | null | undefined;
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
            startDate: Moment | null;
            endDate: Moment | null;
        } | null;
        datePicker: Moment | null;
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
            startDate: Moment | null;
            endDate: Moment | null;
        } | null;
        datePicker: Moment | null;
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
            startDate: Moment | null;
            endDate: Moment | null;
        } | null;
        datePicker: Moment | null;
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
            startDate: Moment | null;
            endDate: Moment | null;
        } | null;
        datePicker: Moment | null;
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
            startDate: Moment | null;
            endDate: Moment | null;
        } | null;
        datePicker: Moment | null;
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
            startDate: Moment | null;
            endDate: Moment | null;
        } | null;
        datePicker: Moment | null;
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
            startDate: Moment | null;
            endDate: Moment | null;
        } | null;
        datePicker: Moment | null;
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
        datePicker: Moment | null;
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
            startDate: Moment | null;
            endDate: Moment | null;
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
        date: Moment | null;
    }) => {
        type: string;
        date: Moment | null;
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
        startDate: Moment | null;
        endDate: Moment | null;
    }) => {
        type: string;
        startDate: Moment | null;
        endDate: Moment | null;
    };
    clearDateRange: () => {
        type: string;
    };
    setDatePicker: ({ date }: {
        date: Moment | null;
    }) => {
        type: string;
        date: Moment | null;
    };
    clearDatePicker: () => {
        type: string;
    };
};
export default tableReducer;
