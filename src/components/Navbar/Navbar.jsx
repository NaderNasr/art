import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  ListItemIcon
} from "@material-ui/core";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import { ShoppingCart } from '@material-ui/icons';


import logo from '../../assets/logo.png'
import useStyles from './styles';


const Navbar = (props) => {

  const classes = useStyles();
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);
  
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
 };


  return (
    <div>
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography
         variant="h5"
         color="black"
         className={classes.title}
        >
          <img src={logo} alt="ARt" height="25px" className={classes.image}/>
          ARt
        </Typography>
        {isMobile ? (
          <>
          <IconButton
          color="text primary"
          className={classes.menuButton}
          edge="start"
          aria-label="menu"
          onClick={handleMenu}
          >
            <MenuIcon/>
          </IconButton>
          </>
        ) : <div></div> }
      </Toolbar>
    </AppBar>
    </div>
  );
};
export default Navbar;