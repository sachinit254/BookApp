import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Hidden,
  Link,
  ListItem,
  Drawer,
  CssBaseline,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderBottom: "1px solid #016700",
  },
  menuButton: {
    marginRight: 0,
    padding: 0,
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(2),
    },
  },
  title: {
    display: "flex",
    alignItems: "center",
    marginRight: "auto",
    fontSize: 25,
    cursor: "pointer",
    marginLeft: 20,
    [theme.breakpoints.up("sm")]: {
      marginLeft: 100,
      fontSize: 35,
    },
  },
  bookIcon: {
    width: "100%",
  },
  link: {
    margin: 10,
    fontWeight: "bold",
    fontSize: 17,
    padding: 10,
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
      borderRadius: "5px",
      outline: "1px solid #016700",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawer: {
    padding: 50,
  },
  paper: {
    width: 200,
  },
  listitem: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    color: "black",
  },
  listitemLink: {
    fontWeight: 550,
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
    "&:hover": {
      borderBottom: "1px solid #007F00",
      textDecoration: "none",
    },
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
  },
  sidebarContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    margin: 0,
  },
  sidebarLink: {
    fontWeight: 550,
    marginTop: 5,
    marginBottom: 5,
    color: "#007f00",
    padding: 5,
    "&:hover": {
      borderBottom: "1px solid #007F00",
      textDecoration: "none",
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      <CssBaseline />
          <div classNameName={classes.root}>
            <AppBar
              position="static"
              elevation={0}
              style={{ backgroundColor: "white" }}
            >
              <Toolbar>
                <Typography variant="h6" className={classes.title} color="primary">
               
                  Bookstore
                </Typography>
                <Hidden mdUp>
                  <IconButton
                    edge="end"
                    className={classes.menuButton}
                    color="primary"
                    aria-label="menu"
                    anchor="right"
                    onClick={handleDrawerToggle}
                  >
                    <MenuIcon style={{ fontSize: 40 }} />
                  </IconButton>
                </Hidden>
                <Hidden smDown>
                  <div className={classes.headerContainer} p={2}>
                    <Link
                      className={classes.link}
                      component={RouterLink}
                      to="/"
                      variant="body1"
                      color="primary"
                    >
                      Home
                    </Link>
                    <Link
                      className={classes.link}
                      component={RouterLink}
                      to="/about"
                      variant="body1"
                      color="primary"
                    >
                      About
                    </Link>
                    {/* <Link
                      className={classes.link}
                      component={RouterLink}
                      to="/store"
                      variant="body1"
                      color="primary"
                    >
                      Store
                    </Link> */}
    
                    {userInfo ? (
                      <div>
                        <Link
                          className={classes.link}
                          component={RouterLink}
                          to="/profile"
                          variant="body1"
                          color="primary"
                        >
                          Profile
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <Link
                          className={classes.link}
                          component={RouterLink}
                          to="/login"
                          variant="body1"
                          color="primary"
                        >
                          Login
                        </Link>
                        <Link
                          className={classes.link}
                          component={RouterLink}
                          to="/signup"
                          variant="body1"
                          color="primary"
                        >
                          SignUp
                        </Link>
                      </div>
                    )}
                  </div>
                </Hidden>
              </Toolbar>
            </AppBar>
            <Hidden mdUp>
              <Drawer
                classes={{ paper: classes.paper }}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                anchor="right"
                ModalProps={{ keepMounted: true }}
              >
                <Box>
                  <IconButton onClick={handleDrawerToggle}>
                    <CloseIcon />
                  </IconButton>
                </Box>
    
                <ListItem className={classes.listitem}>
                  <Link
                    variant="body1"
                    className={classes.listitemLink}
                    color="secondary"
                    component={RouterLink}
                    to="/"
                    onClick={handleDrawerToggle}
                  >
                    Home
                  </Link>
                  <Link
                    variant="body1"
                    className={classes.listitemLink}
                    color="secondary"
                    component={RouterLink}
                    to="/about"
                    onClick={handleDrawerToggle}
                  >
                    About
                  </Link>
                  {/* <Link
                    variant="body1"
                    className={classes.listitemLink}
                    color="secondary"
                    component={RouterLink}
                    to="/store"
                    onClick={handleDrawerToggle}
                  >
                    Store
                  </Link> */}
                  {userInfo ? (
                    <div className={classes.sidebarContainer}>
                      <Link
                        className={classes.sidebarLink}
                        component={RouterLink}
                        to="/profile"
                        variant="body1"
                        onClick={handleDrawerToggle}
                      >
                        Profile
                      </Link>
                    </div>
                  ) : (
                    <div className={classes.sidebarContainer}>
                      <Link
                        className={classes.sidebarLink}
                        component={RouterLink}
                        to="/login"
                        variant="body1"
                        onClick={handleDrawerToggle}
                      >
                        Login
                      </Link>
                      <Link
                        className={classes.sidebarLink}
                        component={RouterLink}
                        to="/signup"
                        variant="body1"
                        onClick={handleDrawerToggle}
                      >
                        SignUp
                      </Link>
                    </div>
                  )}
                </ListItem>
              </Drawer>
            </Hidden>
          </div>
    </>
  );
}
