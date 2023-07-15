import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { pages } from "./routes";
import { AnimatePresence } from "framer-motion";
import css from "./App.module.css";

function App() {

    return (
        <div className={css.app}>
            <AnimatePresence>
                <Routes>
                    <Route path={"/"} element={<Layout/>}>
                        {pages.map((Pages) =>
                            <Route
                                path={Pages.path}
                                element={<Pages.Component/>}
                                key={Pages.path}
                            />
                        )}
                    </Route>
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;
