import React from "react";
import UsersTable from "../Components/UsersTable";
import { Button, Toolbar, Box } from "@mui/material";

const Users = () => {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
    >
      <Toolbar />

      {/* Page Headings */}
      <Toolbar />

      {/* Buttons */}
      <Toolbar>
        <Button variant="contained" sx={{ marginRight: "10px" }}>
          Add New LineMan
        </Button>
      </Toolbar>

      {/* Table */}
      <UsersTable />

      {/* Assign Button */}
      <Toolbar sx={{ textAlign: "right" }}>
        <Button
          variant="contained"
          sx={{
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
          disabled
        >
          Assign
        </Button>
      </Toolbar>
    </Box>
  );
};

export default Users;
