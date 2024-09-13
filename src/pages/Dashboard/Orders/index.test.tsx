import { render, screen } from "@testing-library/react";
import Orders from "@/pages/Dashboard/Orders/index";
import { BrowserRouter } from "react-router-dom";
import css from "@/pages/Dashboard/Orders/index.module.scss";
import { data } from "@/data";

describe("render components on page", () => {
  it("render Orders", () => {
    render(<Orders />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Orders today/i)).toBeInTheDocument();
  });
  it("count Orders on page", () => {
    const { container } = render(<Orders />, { wrapper: BrowserRouter });
    expect(container.getElementsByClassName(css.order).length).toBe(
      data.ordersData().length
    );
  });
});
