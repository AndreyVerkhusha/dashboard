import Board from "@/pages/Board";
import Dashboard from "@/pages/Dashboard";
import Calendar from "@/pages/Calendar";
import Users from "@/pages/Users";
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
