import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Sidebar from "@/components/Layout/Sidebar/index";

describe("should change current location", () => {
    const setupMyTest = () => {
        const router = createMemoryRouter(
            [
                {path: "/", element: <Sidebar/>},
                {path: "/board", element: <Sidebar/>},
                {path: "/calendar", element: <Sidebar/>},
                {path: "/users", element: <Sidebar/>},
                {path: "/dashboard", element: <Sidebar/>}
            ],
            {initialEntries: ["/"]}
        );
        render(<RouterProvider router={router}/>);
        return {router};
    };
    const {click} = userEvent.setup();

    it("count navigate buttons", () => {
        const {router} = setupMyTest();
        const links = screen.getAllByRole("link");
        expect(links.length).toBe(4);
        console.log(router);
    } );
    it("navigate to /dashboard", async () => {
        const {router} = setupMyTest();
        const links = screen.getAllByRole("link");

        expect(router.state.location.pathname).toEqual("/");

        await click(links[0]);
        await waitFor(() =>
            expect(router.state.location.pathname).toEqual("/dashboard")
        );
    });
    it("navigate to /board", async () => {
        const {router} = setupMyTest();
        const links = screen.getAllByRole("link");

        expect(router.state.location.pathname).toEqual("/");

        await click(links[1]);
        await waitFor(() =>
            expect(router.state.location.pathname).toEqual("/board")
        );
    });
    it("navigate to /calendar", async () => {
        const {router} = setupMyTest();
        const links = screen.getAllByRole("link");

        expect(router.state.location.pathname).toEqual("/");

        await click(links[2]);
        await waitFor(() =>
            expect(router.state.location.pathname).toEqual("/calendar")
        );
    });
    it("navigate to /users", async () => {
        const {router} = setupMyTest();
        const links = screen.getAllByRole("link");

        expect(router.state.location.pathname).toEqual("/");

        await click(links[3]);
        await waitFor(() =>
            expect(router.state.location.pathname).toEqual("/users")
        );
    });
});