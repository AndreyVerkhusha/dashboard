import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { pages } from "./routes";
import { AnimatePresence } from "framer-motion";
import css from "./App.module.css";

function App() {

    return (
        <div className={css.app}>
            <AnimatePresence>
                <Routes>
                    <Route path={"/"} element={<Layout/>}>
                        {pages.map((Page) =>
                            <Route
                                path={Page.path}
                                element={<Page.Component/>}
                                key={Page.path}
                            />
                        )}
                    </Route>
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;
