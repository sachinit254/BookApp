import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { Link as RouterLink } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { CssBaseline } from "@material-ui/core";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    "& input": { color: "green" },
    "& label": {
      color: "#007F00",
    },
  },
  paper: {
    marginTop: theme.spacing(4),
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
    color: "#ffffff",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: 17,
    "&:hover": {
      backgroundColor: "#007F00",
    },
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);
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
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={submitHandler}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              error={emailError}
              fullWidth
              id="email"
              type="email"
              label="Email address"
              name="email"
              autofocus
              className={classes.root}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              error={passwordError}
              fullWidth
              name="password"
              label="password"
              type="password"
              id="password"
              className={classes.root}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              className={classes.submit}
              fullWidth
            >
              Sign in
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" color="secondary" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  color="secondary"
                  component={RouterLink}
                  to="/signup"
                  variant="body2"
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
};

export default SignIn;
