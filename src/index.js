import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {store} from "./redux/store.js";
import {Provider} from "react-redux";

import Home from "./pages/Home";
import Posts from "./components/Posts";
import HtmlError from "./pages/HtmlError";

export default function App() {

    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/">
                            <Route index element={<Home/>}/>
                            <Route path="posts" element={<Posts/>}/>
                            <Route path="*" element={<HtmlError/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App/>
);