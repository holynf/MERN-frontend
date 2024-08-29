import {createSlice} from "@reduxjs/toolkit";
import {UIStore} from "../interfaces";

const MOTHER_ORGANIZATION = "MOTHER_ORGANIZATION";
const ORGANIZATION_NAME = "ORGANIZATION_NAME";
const ORGANIZATION_ID = "ORGANIZATION_ID";
const IS_SUPER_ORGANIZATION = "IS_SUPER_ORGANIZATION";
const ACCESS_TOKEN = "ACCESS_TOKEN";
const ADMIN_ACCESS = "ADMIN_ACCESS";
const IMAGE_PATH = "IMAGE_PATH";
const FIRST_LOGIN = "FIRST_LOGIN";
const CHANGE_PASSWORD = "CHANGE_PASSWORD";
const USER_ID = "USER_ID";
const USER_TYPE = "USER_TYPE";
const FULL_NAME = "FULL_NAME";

const initialState: UIStore = {
    token: localStorage.getItem(ACCESS_TOKEN),
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {},
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
