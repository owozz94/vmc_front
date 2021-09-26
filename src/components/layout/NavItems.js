import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BrightnessAutoIcon from '@mui/icons-material/BrightnessAuto';
import ClassIcon from '@mui/icons-material/Class';
import PersonIcon from '@mui/icons-material/Person';
import Certification from '../certification/Certification';
// import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter, HashRouter, Link, Route } from 'react-router-dom';

import Dashboard from '../dashboard/Dashboard'
//NavButton
export const mainListItems = (
  <div >
    <ListItem button>
    
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>      
      {/* <ListItemText primary="Dashbaord" /> */}
      <Link to='/dashbaord' style={{"color": "black", "textDecoration": "none"}}>Dashbaord</Link>

    </ListItem> 

    <ListItem button>  
      <ListItemIcon>
        <BrightnessAutoIcon />
      </ListItemIcon>
      {/* <ListItemText primary="Certification" /> */}
      <Link to='/certification' style={{"color": "black", "textDecoration": "none"}}>Certification </Link>


  
      
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ClassIcon />
      </ListItemIcon>
      {/* <ListItemText primary="My Certifications" /> */}
      <Link to='/mycertification' style={{"color": "black", "textDecoration": "none"}}>My Certification </Link>

    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      {/* <ListItemText primary="Profile" /> */}
      <Link to='/profile' style={{"color": "black", "textDecoration": "none"}}>Profile </Link>
    </ListItem>
   
  </div>
);
