declare const menuReducer: ({ key }: {
    key: string;
}) => {
    menuStateReducer: (state: {
        open: boolean;
        pinned: boolean;
    } | undefined, action: any) => {
        open: boolean;
        pinned: boolean;
    };
    toggleMenu: () => {
        type: string;
    };
    togglePinned: () => {
        type: string;
    };
};
export default menuReducer;
