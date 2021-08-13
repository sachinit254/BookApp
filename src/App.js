import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./components/Header";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
const theme = createTheme({
  palette: {
    primary: {
      main: "#01c851",
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
