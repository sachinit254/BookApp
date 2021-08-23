import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Header from "./components/Header";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import StorePage from "./Pages/StorePage";
import Profile from "./Pages/Profile";
const theme = createTheme({
  palette: {
    primary: {
      main: "#016700",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#007F00",
      contrastText: "#ffffff  ",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif", "Lato"].join(","),
    body1: {
      fontFamily: "Lato",
    },
    body2: {
      fontFamily: "Lato",
    },
  },
});
function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/signin" exact component={SignInPage} />
            <Route path="/signup" exact component={SignUpPage} />
            <Route path="/store" exact component={StorePage} />
            <Route path="/profile" exact component={Profile} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
