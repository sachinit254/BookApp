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
  const textfield = [
    { name: "firstname", label: "First Name", type: "text", sm: 6 },
    { name: "lastname", label: "Last Name", type: "text", sm: 6 },
    { name: "city", label: "City", type: "text" },
    { name: "email", label: "Email Address", type: "email" },
    { name: "password", label: "Password", type: "password" },
  ];
  return (
    <div>
      <CssBaseline />
      <Typography variant="h3">User Details</Typography>
      <Box className={classes.root}>
        <form>
          <Grid container spacing={2}>
            {textfield.map((field, index) => {
              return (
                <Grid item xs={12} sm={field.sm}>
                  <TextField
                    label={field.label}
                    name={field.name}
                    type={field.type}
                    required
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
              );
            })}
          </Grid>
        </form>
      </Box>
    </div>
  );
};

export default UserDetails;
