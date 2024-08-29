import {store} from "./store/core";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// routes
import TestPage from "./pages/test.tsx";
import HtmlError from "./pages/htmlError.tsx";


function App() {
    return <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<TestPage/>}/>
                    <Route path="*" element={<HtmlError/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
}

export default App
