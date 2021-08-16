import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Header from "./components/Header";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import StorePage from "./Pages/StorePage";
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
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/store" element={<StorePage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
