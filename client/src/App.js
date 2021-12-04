import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Header from "./components/Header.jsx";
import LoginPage from "./Pages/LogInPage";
import SignUpPage from "./Pages/SignUpPage";
import StorePage from "./Pages/StorePage";
import Profile from "./Pages/Profile";
import SingleBook from "./Pages/SingleBook";
import AboutPage from "./Pages/AboutPage";
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
            <Route path="/login" exact component={LoginPage} />
            <Route path="/signup" exact component={SignUpPage} />
            <Route path="/store" exact component={StorePage} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/books/:id" exact component={SingleBook} />
            <Route path="/about" exact component={AboutPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
