import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  Badge,
  Box,
  // Menu,
  // MenuItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import CropPortraitIcon from "@mui/icons-material/CropPortrait";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import ListItemButton from "@mui/material/ListItemButton";
import HomeIcon from "@mui/icons-material/Home";
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
// import HomeIcon from "@material-ui/icons/";
import Drawer from "@mui/material/Drawer";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Navbar = ({ totalItems, clearSearch, userInfo }) => {
  const classes = useStyles();
  // const [anchor, setAnchor] = useState(null);
  const [open, setOpen] = useState(false);
  // const open = Boolean(anchor);

  const [isCustomerOnline, setIsCustomerOnline] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  // const handleMenu = (event) => {
  //   setAnchor(event.currentTarget);
  // };

  const logOut = () => {
    // setAnchor(null)
    commerce.customer.logout().forceUpdate();
    window.location.reload(false);
  };
  console.log("userInfo: ", userInfo);

  useEffect(() => {
    console.log("1 - Effect =", isCustomerOnline);
    const timer = setInterval(() => {
      setIsCustomerOnline(commerce.customer.isLoggedIn());
    }, 500);
    // }
    return () => clearInterval(timer);
  }, [isCustomerOnline]);
  console.log("3 - Effect =", isCustomerOnline);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

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
                onClick={toggleDrawer(true)}
                sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              {/* <Menu
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
              </Menu> */}
              <Drawer
                classes={{ paper: classes.Drawer }}
                anchor="left"
                variant="temporary"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                style={{ width: '75%'}}
              >
                <div >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    
                  <AccountCircleOutlinedIcon style={{ marginLeft: '0.7em', color: "#BB86FC" }} />

                  <IconButton sx={{ mb: 2 }}>
                    <CloseIcon
                      onClick={toggleDrawer(false)}
                      style={{ color: "#BB86FC" }}
                      />
                  </IconButton>
                      </div>
                  <div style={ {padding: '1em 1em 0em 1em', bottom: "0",}}>
                  <Typography variant='h5' style={{ color: "#BB86FC" }}>
                    {userInfo.firstname} {userInfo.lastname}
                  </Typography>
                  <Typography variant='subtitle1' style={{ color: "#BB86FC" }}>
                    {userInfo.email}
                  </Typography>
                  </div>
                </div>
                <Box>
                  <ListItemButton
                    style={{ backgroundColor: "#24252A", color: "#BB86FC", marginTop : '1em' }}
                  >
                    <ListItemIcon>
                      <HomeIcon style={{ color: "#BB86FC" }} />
                    </ListItemIcon>
                    <ListItemText style={{ color: "#BB86FC" }} primary="Home" />
                  </ListItemButton>
                  <ListItemButton
                    style={{ backgroundColor: "#24252A", color: "#BB86FC", marginTop : '1em'  }}
                  >
                    <ListItemIcon>
                      <CropPortraitIcon style={{ color: "#BB86FC" }} />
                    </ListItemIcon>
                    <ListItemText
                      style={{ color: "#BB86FC" }}
                      primary="Products"
                    />
                  </ListItemButton>
                  <ListItemButton
                    style={{ backgroundColor: "#24252A", color: "#BB86FC", marginTop : '1em'  }}
                  >
                    <ListItemIcon
                      style={{ backgroundColor: "#24252A", color: "#BB86FC" }}
                    >
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText
                      style={{ color: "#BB86FC" }}
                      primary="Profile"
                    />
                  </ListItemButton>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    position: "absolute",
                    bottom: "0",
                    marginBottom: "1em",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                  }}
                >
                  <Button
                    style={{ backgroundColor: "#BB86FC", color: "#000000" }}
                    variant="outlined"
                    sx={{ m: 1, width: 0.5 }}
                  >
                    Login
                  </Button>
                </Box>
              </Drawer>

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
