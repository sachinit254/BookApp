import React, { useEffect } from "react";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { logout } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    placeItems: "center",
    width: "100%",
    height: "auto",
    padding: "4rem",
  },
  container: {
    position: "relative",
  },
  logoutBtn: {
    position: "absolute",
    top: "10px",
    right: "30px",
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
  const dispatch = useDispatch();
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className={classes.container}>
      <CssBaseline />
      <Typography variant="h3">User Details</Typography>
      <Button
        className={classes.logoutBtn}
        variant="outlined"
        onClick={logoutHandler}
      >
        Logout
      </Button>
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
