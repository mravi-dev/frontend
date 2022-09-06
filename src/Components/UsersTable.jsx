import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows, columns } from "../Data/UserData";

const UsersTable = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default UsersTable;
