import * as React from "react";
import { Outlet, useParams } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import { CssBaseline, Box } from "@mui/material";
import Navbar from "../Components/Navbar";

const Dashboard = () => {
  const { fname } = useParams();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Sidebar */}
      <Sidebar fname={fname} />

      {/* Nav Bar */}
      <Navbar />
      <Outlet />
      {/* <Task /> */}
    </Box>
  );
};

export default Dashboard;
