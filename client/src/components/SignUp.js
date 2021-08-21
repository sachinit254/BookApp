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
import { CssBaseline } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
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

  let name, value;
  const handleInputs = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { firstname, lastname, city, email, password, confirmpassword } = user;
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
    }
  };
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
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstname"
                  variant="outlined"
                  required
                  fullWidth
                  label="First Name"
                  type="text"
                  value={user.firstname}
                  className={classes.root}
                  onChange={handleInputs}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="lastname"
                  variant="outlined"
                  required
                  fullWidth
                  label="Last Name"
                  type="text"
                  value={user.lastname}
                  className={classes.root}
                  onChange={handleInputs}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="city"
                  variant="outlined"
                  required
                  fullWidth
                  label="City"
                  type="text"
                  value={user.city}
                  className={classes.root}
                  onChange={handleInputs}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  label="Email address"
                  type="email"
                  value={user.email}
                  className={classes.root}
                  onChange={handleInputs}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  variant="outlined"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  value={user.password}
                  className={classes.root}
                  onChange={handleInputs}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="confirmpassword"
                  variant="outlined"
                  required
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  value={user.confirmpassword}
                  className={classes.root}
                  onChange={handleInputs}
                />
              </Grid>
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
