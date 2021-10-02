import React, { useEffect } from "react";
import { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  CssBaseline,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import ErrorMessage from "./ErrorMessage";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import Loading from "./Loading";
import { useHistory } from "react-router";
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

const LogIn = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const toggleIcon = () => {
    setShowIcon(true);
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history,userInfo]);

  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        {error && <ErrorMessage severity="error">{error}</ErrorMessage>}
        {loading && <Loading />}
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4" color="primary">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={submitHandler}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              type="email"
              label="Email address"
              name="email"
              value={email}
              autofocus
              className={classes.root}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              value={password}
              label="password"
              type={showPassword ? "text" : "password"}
              id="password"
              className={classes.root}
              onChange={(e) => setPassword(e.target.value)}
              onInput={toggleIcon}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {showIcon ? (
                      <IconButton onClick={togglePassword}>
                        {showPassword ? <Visibility /> : <VisibilityOffIcon />}
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
            >
              Login
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

export default LogIn;
