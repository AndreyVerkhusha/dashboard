import { render, screen, waitFor } from "@testing-library/react";
import Statistics from "@/pages/Dashboard/Statistics/index";
import { BrowserRouter } from "react-router-dom";
import { data } from "@/data";

it("render component", async () => {
    render(<Statistics/>, {wrapper: BrowserRouter});
    await waitFor(() => {
        expect(screen.getByText(/Top item this month/i)).toBeInTheDocument();
        expect(screen.getByText((_, elem) =>
            elem?.textContent === "$ " + data.groupNumber(370000)))
            .toBeInTheDocument();
    });
});