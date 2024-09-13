import { render, screen } from "@testing-library/react";
import Order from "@/pages/Dashboard/Orders/Order/index";
import { BrowserRouter } from "react-router-dom";

it("render component", () => {
  render(
    <Order
      name={"test_name"}
      type={"test_type"}
      items={123123123}
      change={321321321}
    />,
    { wrapper: BrowserRouter }
  );
  expect(screen.getByText("test_name")).toBeInTheDocument();
  expect(screen.getByText("test_type")).toBeInTheDocument();
  expect(screen.getByText(/123123123/)).toBeInTheDocument();
  expect(screen.getByText(/321321321/)).toBeInTheDocument();
});
