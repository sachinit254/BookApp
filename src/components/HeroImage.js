import { Box, CssBaseline, makeStyles, Typography } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    ) no-repeat center`,
    backgroundSize: "cover",
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "80vh",
  },
  box: {
    width: "100%",
    height: "100%",
    display: "grid",
    placeItems: "center",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  typo: {
    width: "60%",
    fontSize: 50,
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
}));
const HeroImage = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Box className={classes.box}>
          <Typography
            fontWeight="fontWeightLight"
            color="primary"
            className={classes.typo}
          >
            Welcome to the paradise of book lovers!
          </Typography>
        </Box>
      </div>
    </>
  );
};

export default HeroImage;
