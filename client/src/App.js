import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Header from "./components/Header.jsx";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import StorePage from "./Pages/StorePage";
import Profile from "./Pages/ProfilePage";
import AdminPage from "./Pages/AdminPage";
import MyBooksPage from "./Pages/MyBooksPage";
import DetailsPage from "./Pages/DetailsPage";
import ProfileModal from "./components/ProfileModal";
import { useState } from "react";

function App() {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="bg-darkslategray relative">
      <Router>
        <Header showDetails={showDetails} setShowDetails={setShowDetails} />
        {showDetails && <ProfileModal setShowDetails={setShowDetails} />}
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signin" exact component={SignInPage} />
          <Route path="/signup" exact component={SignUpPage} />
          <Route path="/store" exact component={StorePage} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/books/:id" exact component={AdminPage} />
          <Route path="/myBooks" exact component={MyBooksPage} />
          <Route path="/singleBook/:id" exact component={DetailsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
