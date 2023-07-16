import "@testing-library/jest-dom";
import * as echarts from "echarts";
import { fetch, Request, Response } from "@remix-run/web-fetch";

// моковая функция для echarts. Без неё chart выкидывает ошибку о том, что dom не имеет размера
// и этим руинит тест.
let spy: any;
beforeAll(() => {
    spy = vi.spyOn(echarts, "getInstanceByDom")
        .mockImplementation(
            (): any => ({
                hideLoading: vi.fn(),
                setOption: vi.fn(),
                showLoading: vi.fn()
            })
        );
});
afterAll(() => {
    spy.mockRestore();
});

if (!globalThis.fetch) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    globalThis.fetch = fetch;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    globalThis.Request = Request;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    globalThis.Response = Response;
}



