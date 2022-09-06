import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  const drawerWidth = 240;
  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar>
        <Typography variant="h5" noWrap component="div">
          Disconnection Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
