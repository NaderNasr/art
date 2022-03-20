import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  Badge,
  // useScrollTrigger,
  // Slide,
  // Menu,
  // MenuItem,
  // ListItemIcon
} from "@material-ui/core";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import { ShoppingCart } from '@material-ui/icons';

import { useTheme } from '@mui/material/styles';


import logo from '../../assets/logo.png'
import useStyles from './styles';


const Navbar = ({ totalItems }) => {

  const classes = useStyles();
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));

  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };


  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar>
          {isMobile ?
            <>
              <Typography
                variant="h5"
                color="primary"
                className={classes.title}
              >
                <img src={logo} alt="ARt" height="25px" className={classes.image} />
                ARt
              </Typography>
              <div className={classes.buttons}>
                <Button variant="text" >
                  Hot
                </Button>
                <Button variant="text" >
                  categories
                </Button>
                <Button variant="text" >
                  Products
                </Button>
              </div>
              <div className={classes.cart}>
                <IconButton aria-label="Show cart items">
                  <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </div>
            </>
            :
            <>
              <IconButton color="primary" className={classes.menuButton} edge="start" aria-label="menu" onClick={handleMenu}>
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h5"
                color="primary"
                className={classes.title}
              >
                <img src={logo} alt="ARt" height="25px" className={classes.image} />
                ARt
              </Typography>
              <div className={classes.cart}>
                <IconButton aria-label="Show cart items">
                  <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </div>
            </>
          }

        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;