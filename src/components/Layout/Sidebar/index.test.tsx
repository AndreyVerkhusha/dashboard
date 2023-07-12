import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { expect, it } from "vitest";
import userEvent from '@testing-library/user-event';

import Board from "@/pages/Board";
import Calendar from "@/pages/Calendar";
import Users from "@/pages/Users";
import Sidebar from "@/components/Layout/Sidebar/index";


describe("should change current location", () => {
    const setupMyTest = () => {
        const router = createMemoryRouter(
            [
                {path: "/", element: <Sidebar/>},
                {path: "/board", element: <Board/>},
                {path: "/calendar", element: <Calendar/>},
                {path: "/users", element: <Users/>},
            ],
            {initialEntries: ['/']}
        );
        render(<RouterProvider router={router}/>);
        return {router};
    };

    it("change navigate", async () => {
        const {router} = setupMyTest();
        const {click} = userEvent.setup();
        const links = screen.getAllByRole('link');

        expect(links.length).toBe(4);
        expect(router.state.location.pathname).toEqual("/");


        await click(links[1]);
        await waitFor(() =>
            expect(router.state.location.pathname).toEqual("/board")
        );
    });
});