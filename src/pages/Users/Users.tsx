import { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { motion } from "framer-motion";
import { UserData } from "@/types/types";
import { userData } from "@/data";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./Users.scss";

const Users = () => {
    const columns = useMemo<MRT_ColumnDef<UserData>[]>(() => [
        {
            accessorKey: "name.firstName",
            header: "First Name"
        },
        {
            accessorKey: "name.lastName",
            header: "Last Name"
        },
        {
            accessorKey: "address", //normal accessorKey
            header: "Address"
        },
        {
            accessorKey: "city",
            header: "City"
        },
        {
            accessorKey: "state",
            header: "State"
        }
    ], []);

    const theme = useMemo(
        () => createTheme({
            palette: {
                mode: "dark"
            }
        }), []);
    return (
        <motion.div
            className="table-container"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <ThemeProvider theme={theme}>
                <MaterialReactTable columns={columns} data={userData}/>
            </ThemeProvider>
        </motion.div>
    );
};

export default Users;