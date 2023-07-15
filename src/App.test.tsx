import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import * as echarts from "echarts";
import { expect, it } from "vitest";
import css from "./App.module.css";
import App from "@/App";


// моковая функция. Без неё chart выкидывает ошибку о том, что dom не имеет размера
// и этим руинит тест.
let spy: any;
beforeAll(() => {
    spy = vi.spyOn(echarts, "getInstanceByDom")
        .mockImplementation(
            // @ts-ignore
            () => ({
                hideLoading: vi.fn(),
                setOption: vi.fn(),
                showLoading: vi.fn()
            })
        );
});
afterAll(() => {
    spy.mockRestore();
});
it("render App", async () => {
    const {container} = render(<App/>, {wrapper: BrowserRouter});
    const divApp = container.getElementsByClassName(css.app);
    expect(divApp.length).toBe(1);
});
