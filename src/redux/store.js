import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import postReducer from "./post/postSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        post: postReducer,
    },
});