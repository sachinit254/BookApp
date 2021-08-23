import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { CssBaseline, IconButton, InputAdornment } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
const useStyles = makeStyles((theme) => ({
  root: {
    "& input": { color: "green" },
    "& label": {
      color: theme.palette.primary.main,
    },
  },
  paper: {
    margin: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    display: "grid",
    placeItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  grid: {
    margin: 0,
    [theme.breakpoints.down("xs")]: {
      "& > .MuiGrid-item": {
        margin: 2,
      },
    },
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    city: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowConfPassword] = useState(false);
  const [passIcon, setPassIcon] = useState(false);
  const [confPassIcon, setConfPassIcon] = useState(false);
  const togglePassIcon = () => {
    setPassIcon(true);
  };
  const toggleConfPassIcon = () => {
    setConfPassIcon(true);
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPassword = () => {
    setShowConfPassword(!showCPassword);
  };

  let name, value;
  const handleInputs = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { firstname, lastname, city, email, password, confirmpassword } =
      user;
    console.log(user);
    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        city,
        email,
        password,
        confirmpassword,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("invalid registration");
    } else {
      window.alert("registration Done");
      history.push("/");
    }
  };

  const textfield = [
    {
      name: "firstname",
      value: `${user.firstname}`,
      label: "First Name",
      type: "text",
      sm: 6,
    },
    {
      name: "lastname",
      value: `${user.lastname}`,
      label: "Last Name",
      type: "text",
      sm: 6,
    },
    {
      name: "city",
      value: `${user.city}`,
      label: "City",
      type: "text",
    },
    {
      name: "email",
      value: `${user.email}`,
      label: "Email Address",
      type: "email",
    },
    {
      name: "password",
      value: `${user.password}`,
      label: "Password",
      unmask: true,
      showIcon: passIcon,
      showPass: showPassword,
      toggleIcon: togglePassIcon,
      togglePass: togglePassword,
      type: "password",
    },
    {
      name: "confirmpassword",
      value: `${user.confirmpassword}`,
      label: "Confirm Password",
      unmask: true,
      showIcon: confPassIcon,
      showPass: showCPassword,
      toggleIcon: toggleConfPassIcon,
      togglePass: toggleConfirmPassword,
      type: "password",
    },
  ];

  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4" color="primary">
            Sign up
          </Typography>
          <form className={classes.form} noValidate method="POST">
            <Grid container className={classes.grid} spacing={2}>
              {textfield.map(
                ({
                  name,
                  value,
                  type,
                  label,
                  sm,
                  unmask,
                  showIcon,
                  showPass,
                  toggleIcon,
                  togglePass,
                }) => {
                  return (
                    <Grid item xs={12} sm={sm}>
                      <TextField
                        name={name}
                        variant="outlined"
                        required
                        fullWidth
                        label={label}
                        type={showPass ? "text" : `${type}`}
                        value={value}
                        className={classes.root}
                        onChange={handleInputs}
                        onInput={toggleIcon}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              {unmask && showIcon ? (
                                <IconButton onClick={togglePass}>
                                  {showPass ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              ) : null}
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  );
                }
              )}
            </Grid>
            <Button
              type="submit"
              variant="contained"
              className={classes.submit}
              fullWidth
              onClick={postData}
            >
              Sign up
            </Button>
            <Link
              href="#"
              color="secondary"
              variant="body2"
              component={RouterLink}
              to="/signin"
            >
              Already have an account? Sign in
            </Link>
          </form>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
