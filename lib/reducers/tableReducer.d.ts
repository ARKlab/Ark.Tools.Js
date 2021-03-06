import { Moment } from "moment";
declare const tableReducer: ({ key, data, pageSize, pageSizeList, pageNo, sortColumn, columnFilters, tableCount }: {
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
};
export default tableReducer;
