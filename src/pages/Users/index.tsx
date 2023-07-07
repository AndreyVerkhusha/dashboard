import { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { UserData } from "@/types";
import { userData } from "@/data";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.scss';

const Users = () => {
    const columns = useMemo <MRT_ColumnDef<UserData>[]> (() => [
        {
            accessorKey: "name.firstName",
            header: 'First Name',
        },
        {
            accessorKey: "name.lastName",
            header: 'Last Name',
        },
        {
            accessorKey: "address", //normal accessorKey
            header: "Address",
        },
        {
            accessorKey: "city",
            header: "City",
        },
        {
            accessorKey: "state",
            header: "State",
        },
    ], [])
    const theme =
        useMemo(() =>
            createTheme({palette: {mode: "dark"}}), [])
    return (
        <div className="table-container">
            <ThemeProvider theme={theme}>
                <MaterialReactTable columns={columns} data={userData}/>
            </ThemeProvider>
        </div>
    );
};

export default Users;