import { BrowserRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import * as echarts from "echarts";
import { expect, it} from "vitest";

import App from "@/App";


let spy: any;
beforeAll(() => {
    spy = vi.spyOn(echarts, 'getInstanceByDom')
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
it('render App', async () => {
    render( <App/>, {wrapper: BrowserRouter});
    expect(screen.getByText(/Andrey/i)).toBeInTheDocument();
});
