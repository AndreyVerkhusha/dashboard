import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout/index";

it("render component", () => {
    render(<Layout/>, {wrapper: BrowserRouter});
    expect(screen.getByText(/Andrey verkhusha/i)).toBeInTheDocument();
});
