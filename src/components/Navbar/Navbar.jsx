import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  Badge,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import {
  ShoppingCart,
  AccountBox,
  ExitToApp,
  LockOpen,
} from "@material-ui/icons";
import { useTheme } from "@mui/material/styles";
import commerce from "../../lib/commerce";
import useStyles from "./styles";
import Logo from "../../assets/logo.svg";
import HomeIcon from "@material-ui/icons/School";

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
    setAnchor(null)
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
              <Typography variant="h5" className={classes.title}>
                <img
                  src={Logo}
                  alt="ARt"
                  height="45px"
                  className={classes.image}
                />
              </Typography>
              <div className={classes.buttons}>
                <Button
                  className={classes.buttonColor}
                  component={Link}
                  to={"/"}
                  variant="text"
                  onClick={() => clearSearch()}
                >
                  Products
                </Button>
                {commerce.customer.token() ? (
                  <Button
                    className={classes.buttonColor}
                    component={Link}
                    to={"/profile"}
                    variant="text"
                  >
                    profile
                  </Button>
                ) : (
                  <></>
                )}
              </div>
              {isCustomerOnline && (
                <Button
                  className={classes.buttonColor}
                  component={Link}
                  to={"/"}
                  variant="text"
                  onClick={() => logOut()}
                >
                  Logout
                </Button>
              )}

              {!isCustomerOnline && (
                <Button
                  className={classes.buttonColor}
                  component={Link}
                  to={"/login"}
                  variant="text"
                >
                  Register
                </Button>
              )}

              <div>
                <Link to="/cart">
                  <IconButton aria-label="Show cart items">
                    <Badge badgeContent={totalItems} color="secondary">
                      <ShoppingCart style={{ color: "#BB86FC" }} />
                    </Badge>
                  </IconButton>
                </Link>
              </div>
            </>
          ) : (
            //Bottom for mobile
            <>
              <IconButton
                style={{ color: "#BB86FC" }}
                className={classes.menuButton}
                edge="start"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                styles={{ backgroudColor: "#BB86FC" }}
                id="menu-appbar"
                anchorEl={anchor}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                KeepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={open}
              >
                <MenuItem
                  onClick={() => setAnchor(null)}
                  component={Link}
                  to="/"
                >
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <Typography variant="h6"> Home</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => setAnchor(null)}
                  component={Link}
                  to="/"
                >
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <Typography variant="h6"> Products</Typography>
                </MenuItem>
                {isCustomerOnline && <MenuItem
                  onClick={() => setAnchor(null)}
                  component={Link}
                  to="/profile"
                >
                  <ListItemIcon>
                    <AccountBox />
                  </ListItemIcon>
                  <Typography variant="h6"> Profile</Typography>
                </MenuItem>}

                {isCustomerOnline && (
                  <MenuItem onClick={() => logOut()}>
                    <ListItemIcon>
                      <ExitToApp />
                    </ListItemIcon>
                    <Typography variant="h6"> Logout</Typography>
                  </MenuItem>
                )}

                {!isCustomerOnline && (
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/login"
                  >
                    <ListItemIcon>
                      <LockOpen />
                    </ListItemIcon>
                    <Typography variant="h6"> Login</Typography>
                  </MenuItem>
                )}
              </Menu>
              <Typography
                variant="h5"
                color="primary"
                className={classes.titleMobile}
              >
                <img
                  src={Logo}
                  alt="ARt"
                  height="25px"
                  className={classes.image}
                />
              </Typography>
              <div>
                <Link to="/cart">
                  <IconButton aria-label="Show cart items">
                    <Badge badgeContent={totalItems} color="secondary">
                      <ShoppingCart style={{ color: "#BB86FC" }} />
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
