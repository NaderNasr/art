import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  Badge,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { ShoppingCart } from "@material-ui/icons";
import { useTheme } from "@mui/material/styles";
import commerce from "../../lib/commerce";
import logo from "../../assets/logo.png";
import useStyles from "./styles";

const Navbar = ({ totalItems, clearSearch }) => {
  const classes = useStyles();
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);

  const [isCustomerOnline, setIsCustomerOnline] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const logOut = () => {
    commerce.customer.logout().forceUpdate();
    window.location.reload(false);
  };

  useEffect(() => {
    console.log("1 - Effect =", isCustomerOnline);
    const timer = setInterval(() => {
      setIsCustomerOnline(commerce.customer.isLoggedIn());
    }, 500);
    // }
    return () => clearInterval(timer);
  }, [isCustomerOnline]);
  console.log("3 - Effect =", isCustomerOnline);

  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar>
          {isMobile ? (
            <>
              <Typography
                variant="h5"
                color="primary"
                className={classes.title}
              >
                <img
                  src={logo}
                  alt="ARt"
                  height="25px"
                  className={classes.image}
                />
                ARt
              </Typography>
              <div className={classes.buttons}>
                <Button
                  component={Link}
                  to={"/"}
                  variant="text"
                  onClick={() => clearSearch()}
                >
                  Products
                </Button>
                <Button
                  component={Link}
                  to={"/gallery"}
                  variant="text"
                  onClick={() => clearSearch()}
                >
                  Gallery
                </Button>

                {commerce.customer.token() ? (
                  <Button component={Link} to={"/profile"} variant="text">
                    profile
                  </Button>
                ) : (
                  <></>
                )}
              </div>
              {isCustomerOnline && (
                <Button
                  component={Link}
                  to={"/"}
                  variant="text"
                  onClick={() => logOut()}
                >
                  Logout
                </Button>
              )}

              {!isCustomerOnline && (
                <Button component={Link} to={"/login"} variant="text">
                  Register
                </Button>
              )}

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
          ) : (
            //Bottom for mobile
            <>
              <IconButton
                color="primary"
                className={classes.menuButton}
                edge="start"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h5"
                color="primary"
                className={classes.title}
              >
                <img
                  src={logo}
                  alt="ARt"
                  height="25px"
                  className={classes.image}
                />
                ARt
              </Typography>
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
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
