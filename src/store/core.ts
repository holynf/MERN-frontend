import { configureStore } from '@reduxjs/toolkit'
import uiSlice from "./ui-slice.ts";

export const store = configureStore({
    reducer: {
        ui : uiSlice
    },
})