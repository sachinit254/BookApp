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
  { label: "SignOut", path: "/signout" },
];
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: 25,
    marginLeft: 100,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 50,
    },
  },
  link: {
    color: theme.palette.primary.contrastText,
    margin: 10,
    fontWeight: "bold",
    fontSize: 17,
    padding: 10,
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
      borderBottom: "2px solid #ffffff",
    },
  },
  appBar: {},
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
          style={{ background: "linear-gradient(to right, #061700, #52c234)" }}
          elevation={0}
        >
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              BookStore
            </Typography>
            <Hidden mdUp>
              <IconButton
                edge="end"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                anchor="right"
                onClick={handleDrawerToggle}
              >
                <MenuIcon style={{ fontSize: 40 }} />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              <Box p={2}>
                {navLinks.map(({ label,path }) => {
                  return (
                    <Link className={classes.link}  component= {RouterLink} to={path} variant="body1" >
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
            {navLinks.map(({ label, href }) => {
              return (
                <ListItem className={classes.listitem}>
                  <Link
                    variant="body1"
                    href={href}
                    className={classes.listitemLink}
                    color="secondary"
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
