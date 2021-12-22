import React from "react";

const LogIn = ({
  email,
  setEmail,
  password,
  setPassword,
  submitHandler,
}) => {
  return (
    <>
      {/* <CssBaseline />
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
      </Container> */}
      <div className="grid place-items-center bg-darkslategray h-[88.6vh]">
        <div className="w-1/4 mx-auto bg-paleturquoise py-12 rounded-lg">
          <form
            className="flex flex-col items-center space-y-8 mb-6"
            onSubmit={submitHandler}
          >
            <input
              type="text"
              placeholder="Email"
              className="w-4/5 font-poppins placeholder:font-poppins bg-darkslategray text-azure rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative w-4/5">
              <input
                type="password"
                placeholder="Password"
                className="w-full font-poppins placeholder:font-poppins bg-darkslategray text-azure rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="absolute top-1/2 transform -translate-y-1/2 left-60 text-sm text-azure">
                <i class="fas fa-eye-slash"></i>
              </span>
              <span className="absolute top-1/2 transform -translate-y-1/2 left-60 text-sm text-azure">
                <i class="fas fa-eye"></i>
              </span>
            </div>
            <button
              className="w-4/5 font-poppins bg-azure py-2 px-3 rounded-lg font-semibold text-darkslategray hover:text-azure hover:bg-darkslategray"
              type="submit"
            >
              Login
            </button>
          </form>
          <div className="w-4/5 flex justify-between space-x-4 mx-auto">
            <a
              href="#"
              className="text-xs font-poppins text-darkslategray hover:underline hover:decoration-darkslategray font-semibold"
            >
              Forgot password?
            </a>
            <a
              href="/signup"
              className="text-xs font-poppins text-darkslategray hover:underline hover:decoration-darkslategray font-semibold"
            >
              Don't have an account ?<br /> Sign Up{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
