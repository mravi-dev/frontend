import React from "react";
import ConsumerTable from "../Components/ConsumerTable";
import { Button, Toolbar, Box } from "@mui/material";
import CSVImport from "../Components/CSVImport";

const Task = () => {
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
        <span sx={{ textAlign: "right" }}>
          <Button variant="contained" sx={{ marginRight: "10px" }}>
            Top 25 Defaulters
          </Button>
          <Button variant="contained" sx={{ marginRight: "5px" }}>
            Not Paid Since 3 Months
          </Button>
        </span>
      </Toolbar>

      {/* Table */}
      <ConsumerTable />
      

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
        <CSVImport />
      </Toolbar>
    </Box>
  );
};

export default Task;
