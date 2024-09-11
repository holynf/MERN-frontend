import { store } from "./store/core";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { faIR } from "@mui/material/locale";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
// comps & pages
import HtmlError from "./pages/html-error.tsx";
import PrimaryPage from "./hoc/PrimaryPage.tsx";
import HomePage from "./pages/home.tsx";

const theme = createTheme(
    {
        direction: "rtl",
        typography: {
            fontFamily: ["Vazirmatn", "sans-serif"].join(","),
        },
        components: {
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: 12,
                        padding: 4,
                        boxShadow:
                            "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                    },
                },
            },
        },
    },
    faIR,
);

function App() {
    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin],
    });
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<PrimaryPage />}>
                                <Route index element={<HomePage />} />
                                <Route path='*' element={<HtmlError />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </Provider>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default App;
