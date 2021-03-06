declare const tableReducer: ({ key, filterState, filters, filterOrig }: {
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
export default tableReducer;
