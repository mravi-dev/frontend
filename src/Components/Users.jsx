import React from "react";
import UsersTable from "../Components/UsersTable";
import { Button, Toolbar, Box } from "@mui/material";


const Users = () => {

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
    >
     

      {/* Page Headings */}
      <Toolbar />

      {/* Buttons */}
      <Toolbar>
        <Button
          variant="contained"
          sx={{
            marginRight: "10px",
            "&:hover": {
              color: "white",
            },
          }}
          href="/dashboard/addlineman"
          
        >
          Add New LineMan
        </Button>
      </Toolbar>

      {/* Table */}
      <UsersTable />
    </Box>
  );
};

export default Users;
