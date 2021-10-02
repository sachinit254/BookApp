import React from "react";
import { CssBaseline, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import bookSvg from "../images/undraw_book_lover_mkck.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    // background: `url(
    //   "https://images.unsplash.com/photo-1463320726281-696a485928c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    // ) no-repeat center`,
    // backgroundSize: "cover",
    // backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  grid: {
    margin: theme.spacing(2),
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 50,
    },
  },

  img: {
    objectFit: "contain",
    width: "90%",
    height: "100%",
    padding: "50px",
    [theme.breakpoints.only("xs")]: {
      padding: "30px",
      width: "100%",
      height: "300px",
    },
    [theme.breakpoints.only("sm")]: {
      width: "60%",
      height: "80%",
    },
  },
  typo: {
    width: "90%",
    margin: "auto",
    fontSize: 40,
    [theme.breakpoints.up("sm")]: {
      fontSize: 50,
    },
  },
}));
const HeroImage = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Grid container className={classes.grid}>
          <Grid item xs={12} md={6}>
            <img className={classes.img} src={bookSvg} alt="svg" />
          </Grid>
          <Grid style={{ marginRight: 0 }} item xs={12} md={6}>
            <Typography
              fontWeight="fontWeightLight"
              color="primary"
              className={classes.typo}
            >
              Welcome to the paradise of book lovers!
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default HeroImage;
