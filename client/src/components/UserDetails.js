import {
  Box,
  CssBaseline,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    placeItems: "center",
    width: "100%",
    height: "auto",
    padding: "4rem",
  },
}));

const UserDetails = () => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Typography variant="h3">User Details</Typography>
      <Box className={classes.root}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                name="firstName"
                required
                fullWidth
                type="text"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                name="lastName"
                required
                fullWidth
                fullWidth
                type="text"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="City"
                name="city"
                required
                fullWidth
                type="text"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email Address"
                name="email"
                required
                fullWidth
                type="email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                name="password"
                required
                fullWidth
                type="password"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
};

export default UserDetails;
