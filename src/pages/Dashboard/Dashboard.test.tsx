import { render } from "@testing-library/react";
import Dashboard from "@/pages/Dashboard/Dashboard";
import { BrowserRouter } from "react-router-dom";
import css from "@/pages/Dashboard/index.module.scss";
import { data } from "@/data";

describe("render elements on page", () => {
  const errorSelect = (text: string) => {
    throw new Error(text);
  };

  it("select change correct", async () => {
    const { container } = render(<Dashboard />, { wrapper: BrowserRouter });
    const select = container.querySelector("select");

    if (!select) return errorSelect("select false");

    expect(select).toBeInTheDocument();
    expect(select.value).toBe("week");
    select.options[1].selected = true;
    expect(select.value).toBe("month");
    select.options[2].selected = true;
    expect(select.value).toBe("year");
  });
  it("header dashboard render", () => {
    const { container } = render(<Dashboard />, { wrapper: BrowserRouter });
    expect(container.getElementsByClassName(css.card).length).toBe(
      data.dashboardData().length
    );
  });
});
