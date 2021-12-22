import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Header from "./components/Header.jsx";
import LoginPage from "./Pages/LogInPage";
import SignUpPage from "./Pages/SignUpPage";
import StorePage from "./Pages/StorePage";
import Profile from "./Pages/Profile";
import SingleBook from "./Pages/SingleBook";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignUpPage} />
          <Route path="/store" exact component={StorePage} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/books/:id" exact component={SingleBook} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
