import { render } from "@testing-library/react";
import { MaterialReactTable, MRT_ColumnDef } from "material-react-table";
import { userData } from "@/data";

describe("render table", () => {
  const columns: MRT_ColumnDef[] = [
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
  ];

  it("columns count", () => {
    const { container } = render(
      <MaterialReactTable columns={columns} data={userData} />
    );
    expect(container.querySelectorAll("th").length).toBe(columns.length);
  });
  it("render first row", () => {
    const { container } = render(
      <MaterialReactTable columns={columns} data={userData} />
    );
    expect(
      container.querySelectorAll("tr")[1].querySelector("td")
    ).toBeInTheDocument();
  });
});
