import React from "react";
import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { Link as RouterLink, useHistory } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { CssBaseline, IconButton, InputAdornment } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    "& input": { color: "green" },
    "& label": {
      color: theme.palette.primary.main,
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
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.primary.main,
    color: "#ffffff",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: 17,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const [details, setDetails] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const [showIcon, setShowIcon] = useState(false);
  const toggleIcon = () => {
    setShowIcon(true);
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  let name, value;
  const handleInputs = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;
    setDetails({ ...details, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { email, password } = details;
    console.log(details);
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid credentials");
    } else {
      window.alert("Signin successfully");
      history.push("/");
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
          <form className={classes.form} noValidate method="POST">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              type="email"
              label="Email address"
              name="email"
              value={details.email}
              autofocus
              className={classes.root}
              onChange={handleInputs}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              value={details.password}
              label="password"
              type={showPassword ? "text" : "password"}
              id="password"
              className={classes.root}
              onChange={handleInputs}
              onInput={toggleIcon}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {showIcon ? (
                      <IconButton onClick={togglePassword}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    ) : null}
                  </InputAdornment> 
                ),
              }}
            />
            <Button
              type="submit"
              variant="contained"
              className={classes.submit}
              fullWidth
              onClick={postData}
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
