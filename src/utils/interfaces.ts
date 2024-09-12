export interface UIStore {
    token: string | null | undefined;
}
export interface MenuItemsTypes {
    image: string;
    title: string;
    route: string;
    key: string;
}
export interface BranchesItemsTypes extends MenuItemsTypes {
    branchId: number;
    short_description: string;
    location?: string;
}
