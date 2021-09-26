import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BrightnessAutoIcon from "@mui/icons-material/BrightnessAuto";
import ClassIcon from "@mui/icons-material/Class";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

//NavButton
export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      {/* <ListItemText primary="Dashbaord" /> */}
      <Link to="/dashboard" style={{ color: "black", textDecoration: "none" }}>
        Dashboard
      </Link>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <BrightnessAutoIcon />
      </ListItemIcon>
      {/* <ListItemText primary="Certification" /> */}
      <Link to="/certification" style={{ color: "black", textDecoration: "none" }}>
        Certification{" "}
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ClassIcon />
      </ListItemIcon>
      {/* <ListItemText primary="My Certifications" /> */}
      <Link to="/mycertification" style={{ color: "black", textDecoration: "none" }}>
        My Certification{" "}
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      {/* <ListItemText primary="Profile" /> */}
      <Link to="/profile" style={{ color: "black", textDecoration: "none" }}>
        Profile{" "}
      </Link>
    </ListItem>
  </div>
);
