import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import Chart from "@/pages/Dashboard/Orders/Chart/index";

it("render Chart", async () => {
  const { container } = render(<Chart />, { wrapper: BrowserRouter });
  const pieSectors = container.querySelectorAll("object");
  expect(pieSectors.length).not.toBe(0);
});
