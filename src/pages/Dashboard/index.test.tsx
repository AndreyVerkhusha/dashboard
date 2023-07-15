import { render } from "@testing-library/react";
import Dashboard from "@/pages/Dashboard/index";
import { BrowserRouter } from "react-router-dom";


describe("render elements on page", () => {
    const errorSelect = () => {
        throw new Error("select false");
    };

    it("select change correct", async () => {
        const {container} = render(<Dashboard/>, {wrapper: BrowserRouter});
        const select = container.querySelector("select");

        if (!select)
            return errorSelect();

        expect(select).toBeInTheDocument();
        expect(select.value).toBe("week");
        select.options[1].selected = true;
        expect(select.value).toBe("month");
        select.options[2].selected = true;
        expect(select.value).toBe("year");
    });
});