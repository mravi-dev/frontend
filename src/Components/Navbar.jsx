import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const drawerWidth = 240;
  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar>
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
          Disconnection Dashboard
        </Typography>
        <Button href="/" sx={{color: "white" , "&:hover": {color: "white", backgroundColor:"red"}, }}>Log Out</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
