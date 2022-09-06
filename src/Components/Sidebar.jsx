import React from "react";
import { Article, BarChart, ListAlt } from "@mui/icons-material";
import Groups from "@mui/icons-material/Groups";
import {
  List,
  Drawer,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Toolbar,
} from "@mui/material";

const drawerWidth = 240;

const Sidebar = ({ fname }) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Welcome {fname}!
        </Typography>
      </Toolbar>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton href="/dashboard">
            <ListItemIcon>
              <BarChart />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/dashboard/tasks">
            <ListItemIcon>
              <ListAlt />
            </ListItemIcon>
            <ListItemText primary="Assign Task" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/dashboard/users">
            <ListItemIcon>
              <Groups />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/dashboard/reports">
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
