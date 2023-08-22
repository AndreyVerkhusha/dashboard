import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Calendar from "@/pages/Calendar/Calendar";

it("render initialEvents in calendar", async () => {
    const {container} = render(<Calendar/>, {wrapper: BrowserRouter});
    expect([...container.querySelectorAll(".fc-event")].length).toBe(6);
});