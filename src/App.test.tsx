import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import css from "./App.module.css";
import App from "@/App";


it("render App", async () => {
    const {container} = render(<App/>, {wrapper: BrowserRouter});
    const divApp = container.getElementsByClassName(css.app);
    expect(divApp.length).toBe(1);
});
