import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Header from "./components/Header.jsx";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import StorePage from "./Pages/StorePage";
import Profile from "./Pages/ProfilePage";
import BookPage from "./Pages/BookPage";
import MyBooks from "./Pages/MyBooks";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signin" exact component={SignInPage} />
          <Route path="/signup" exact component={SignUpPage} />
          <Route path="/store" exact component={StorePage} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/books/:id" exact component={BookPage} />
          <Route path="/myBooks" exact component={MyBooks} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
