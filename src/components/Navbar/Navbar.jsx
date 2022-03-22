import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  Badge,
} from "@material-ui/core";

import { Link } from "react-router-dom"
import MenuIcon from "@material-ui/icons/Menu";
import { ShoppingCart } from '@material-ui/icons';
import { useTheme } from '@mui/material/styles';
import commerce from '../../lib/commerce'
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

  const logOut = () => {
    commerce.customer.logout();
    window.location.reload(false)
  }

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
                <Button component={Link} to={"/hot"} variant="text" >
                  Hot
                </Button>
                <Button component={Link} to={"/categories"} variant="text" >
                  categories
                </Button>
                <Button component={Link} to={"/:id"} variant="text" >
                  profile
                </Button>
                <Button component={Link} to={"/"} variant="text" >
                  Products
                </Button>
              </div>
              {commerce.customer.token() ?
                <Button component={Link} to={"/"} variant="text" onClick={() => logOut()}>
                  Logout
                </Button>
                :
                <Button component={Link} to={"/login"} variant="text">
                  Register
                </Button>
              }
              <div className={classes.cart}>
                <Link to="/cart">
                  <IconButton aria-label="Show cart items">
                    <Badge badgeContent={totalItems} color="secondary">
                      <ShoppingCart />
                    </Badge>
                  </IconButton>
                </Link>
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