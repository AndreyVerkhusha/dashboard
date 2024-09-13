import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { pages } from "./routes";
import { AnimatePresence } from "framer-motion";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <AnimatePresence>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            {pages.map((Page) => (
              <Route
                path={Page.path}
                element={<Page.Component />}
                key={Page.path}
              />
            ))}
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
