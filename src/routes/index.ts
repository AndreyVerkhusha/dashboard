import Board from "@/pages/Board/Board";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Calendar from "@/pages/Calendar/Calendar";
import Users from "@/pages/Users/Users";
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
    },
    {
        path: "users",
        Component: Users
    }
];
