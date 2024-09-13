import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import StatisticsChart from "@/pages/Dashboard/Statistics/StatisticsChart/index";

it("render Chart", async () => {
  const { container } = render(<StatisticsChart />, { wrapper: BrowserRouter });
  const pieSectors = container.querySelectorAll("object");
  expect(pieSectors.length).not.toBe(0);
});
