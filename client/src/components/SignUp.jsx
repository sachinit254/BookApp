import React, { useEffect, useState } from "react";
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
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink, useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { register } from "../actions/userActions";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
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
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  // const dispatch = useDispatch();
  // const userRegister = useSelector((state) => state.userRegister);
  // const { loading, error, userInfo } = userRegister;

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      // dispatch(register(firstname, lastname, city, email, password));
    }
  };
  // useEffect(() => {
  //   if (userInfo) {
  //     history.push("/");
  //   }
  // }, [history, userInfo]);
  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        {/* {error && <ErrorMessage severity="error">{error}</ErrorMessage>} */}
        {message && <ErrorMessage severity="error">{message}</ErrorMessage>}
        {/* {loading && <Loading />} */}
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4" color="primary">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={submitHandler}>
            <Grid container className={classes.grid} spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstname"
                  variant="outlined"
                  required
                  fullWidth
                  label="First Name"
                  value={firstname}
                  className={classes.root}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="lastname"
                  variant="outlined"
                  required
                  fullWidth
                  label="Last Name"
                  value={lastname}
                  className={classes.root}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="city"
                  variant="outlined"
                  required
                  fullWidth
                  label="City"
                  value={city}
                  className={classes.root}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  label="Email"
                  value={email}
                  className={classes.root}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  variant="outlined"
                  required
                  fullWidth
                  label="Password"
                  value={password}
                  className={classes.root}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="confirmPassword"
                  variant="outlined"
                  required
                  fullWidth
                  label="Confirm Password"
                  value={confirmPassword}
                  className={classes.root}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
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
