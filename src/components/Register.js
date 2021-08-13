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
      color: "#007F00",
    },
  },
  paper: {
    margin: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#01c851",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#01c851",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
    "&:hover": {
      backgroundColor: "green",
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
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const inputs = [
    {
      xs: 12,
      sm: 6,
      error: firstNameError,
      id: "firstName",
      label: "First Name",
      onChange: (e) => setFirstName(e.target.value),
    },
    {
      xs: 12,
      sm: 6,
      error: lastNameError,
      id: "lastName",
      label: "Last Name",
      onChange: (e) => setLastName(e.target.value),
    },
    {
      xs: 12,
      error: cityError,
      id: "city",
      label: "City",
      onChange: (e) => setCity(e.target.value),
    },
    {
      xs: 12,
      error: emailError,
      id: "email",
      label: "Email address",
      onChange: (e) => setEmail(e.target.value),
    },
    {
      xs: 12,
      error: passwordError,
      id: "passsword",
      label: "Password",
      onChange: (e) => setPassword(e.target.value),
    },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    setFirstNameError(false);
    setLastNameError(false);
    setCityError(false);
    setEmailError(false);
    setPasswordError(false);
    if (firstName === "") {
      setFirstNameError(true);
    }
    if (lastName === "") {
      setLastNameError(true);
    }
    if (city === "") {
      setCityError(true);
    }
    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
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
          <form className={classes.form} noValidate onSubmit={submitHandler}>
            <Grid container className={classes.grid} spacing={2}>
              {inputs.map((input) => {
                return (
                  <Grid
                    key={input.id}
                    item
                    xs={input.xs}
                    sm={input.sm ? `${input.sm}` : null}
                  >
                    <TextField
                      error={input.error}
                      onChange={input.onChange}
                      variant="outlined"
                      required
                      fullWidth
                      id={input.id}
                      label={input.label}
                      name={input.id}
                    />
                  </Grid>
                );
              })}
            </Grid>
            <Button
              type="submit"
              variant="contained"
              className={classes.submit}
              fullWidth
            >
              Sign up
            </Button>
            <Link
              href="#"
              color="secondary"
              variant="body2"
              component={RouterLink}
              to="/login"
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