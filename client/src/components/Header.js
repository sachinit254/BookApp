import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, Hidden, Link, ListItem } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { CssBaseline } from "@material-ui/core";
const navLinks = [
  { label: "Home", path: "/" },
  { label: "Store", path: "/store" },
  { label: "About", path: "/about" },
  { label: "SignIn", path: "/signin" },
  { label: "Profile", path: "/profile" },
];
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderBottom: "2px solid #016700",
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
      borderBottom: "2px solid #016700",
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
    display: "block",
    textAlign: "center",
    color: "black",
  },
  listitemLink: {
    fontWeight: 550,
    padding: 10,
    "&:hover": {
      borderBottom: "2px solid #007F00",
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

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar
          position="static"
          elevation={0}
          style={{ backgroundColor: "white" }}
        >
          <Toolbar>
            <Typography variant="h6" className={classes.title} color="primary">
              <lord-icon
                className={classes.bookIcon}
                src="https://cdn.lordicon.com/wxnxiano.json"
                trigger="hover"
                colors="primary:#016700,secondary:#016700"
                stroke="70"
                scale="70"
              ></lord-icon>
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
              <Box p={2}>
                {navLinks.map(({ label, path }) => {
                  return (
                    <Link
                      className={classes.link}
                      component={RouterLink}
                      to={path}
                      variant="body1"
                      color="primary"
                    >
                      {label}
                    </Link>
                  );
                })}
              </Box>
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
            {navLinks.map(({ label, path }) => {
              return (
                <ListItem className={classes.listitem}>
                  <Link
                    variant="body1"
                    className={classes.listitemLink}
                    color="secondary"
                    component={RouterLink}
                    to={path}
                    onClick={handleDrawerToggle}
                  >
                    {label}
                  </Link>
                </ListItem>
              );
            })}
          </Drawer>
        </Hidden>
      </div>
    </>
  );
}
