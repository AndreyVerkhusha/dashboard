import Board from "@/pages/Board";
import Dashboard from "@/pages/Dashboard";
import Calendar from "@/pages/Calendar";
import { ComponentType } from "react";

export const pages: { path: string, Component: ComponentType }[] = [
    {
        path: "dashboard",
        Component: Dashboard
    },
    {
        path: "board",
        Component: Board
    },
    {
        path: "calendar",
        Component: Calendar
    }
];
