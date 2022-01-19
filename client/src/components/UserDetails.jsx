import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CssBaseline,
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
    marginBottom: "400px",
  },
  logoutBtn: {
    position: "absolute",
    top: "10px",
    left: "20px",
  },
  form: {
    position: "absolute",
    top: "100px",
    right: "5vw",
    display: "flex",
    flexDirection: "column",
  },
  textfield: {
    width: "40vw",
    marginBottom: "20px",
  },
}));

const UserDetails = ({ user, logoutHandler }) => {
  const classes = useStyles();
  // const [user, setUser] = useState({});
  console.log(`user`, user);
  // const dispatch = useDispatch();
  // const history = useHistory();
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;
  // console.log(`userInfo`, userInfo);
  // useEffect(() => {
  //   if (!userInfo) {
  //     history.push("/");
  //   } else {
  //     setUser(userInfo);
  //   }
  // }, [history, userInfo]);

  // const logoutHandler = () => {
  //   dispatch(logout());
  // };

  return (
    <>
      {/* <div className={classes.container}>
        <CssBaseline />

        <Button
          className={classes.logoutBtn}
          variant="outlined"
          onClick={logoutHandler}
        >
          Logout
        </Button>
        <Box className={classes.root}>
          <form className={classes.form}>
            <TextField
              className={classes.textfield}
              label="First Name"
              name="firstname"
              type="text"
              value={user?.firstname}
              required
              fullWidth
              variant="outlined"
            />
            <TextField
              className={classes.textfield}
              label="Last Name"
              name="lastname"
              type="text"
              value={user?.lastname}
              required
              fullWidth
              variant="outlined"
            />
            <TextField
              className={classes.textfield}
              label="City"
              name="city"
              type="text"
              value={user?.city}
              required
              fullWidth
              variant="outlined"
            />
            <TextField
              className={classes.textfield}
              label="Email"
              name="email"
              type="email"
              value={user?.email}
              required
              fullWidth
              variant="outlined"
            />
          </form>
        </Box>
      </div> */}
      <div className="bg-darkslategray w-screen h-[calc(100vh-72px)] grid place-items-center">
        <div className="container w-4/6 h-5/6 rounded-lg bg-paleturquoise p-[2px]">
          <div className="relative w-full rounded-t-lg bg-darkslategray h-2/6">
            <div className="absolute left-1/2 top-1/2 bg-white -translate-x-1/2 w-1/5 h-40 rounded-lg border-2 border-white"></div>
          </div>
          <div className="grid place-items-center mt-24">
            <h1 className="font-poppins">Name</h1>
            <h4 className="font-poppins">City</h4>  
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
