import { render, screen } from "@testing-library/react";
import Card from "@/pages/Dashboard/DashboardCard/DashboardCard";
import { BrowserRouter } from "react-router-dom";
import { data } from "@/data";

it("render with data component", () => {
  render(
    <Card title={"test_card"} change={1231231231212} amount={321321321321} />,
    { wrapper: BrowserRouter }
  );

  expect(screen.getByText("test_card")).toBeInTheDocument();
  expect(screen.getByText(/1231231231212/)).toBeInTheDocument();
  expect(
    screen.getByText(
      (_, elem) => elem?.textContent === data.groupNumber(321321321321)
    )
  ).toBeInTheDocument();
});
