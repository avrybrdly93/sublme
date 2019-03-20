import React, { Component } from "react";
import LoggedInNavbar from "./LoggedInNavbar/LoggedInNavbar";
import Dashboard from "../pages/dashboard";
import NoMatch from "../pages/NoMatch";
import Login from "./Login";
import LoggedOutNavbar from "./LoggedOutNavbar/LoggedOutNavbar";
import Cookies from "js-cookie";
import Profile from "../pages/profile";
import Settings from "../pages/settings";
import Signup from "./Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Upload from "./pages/Upload";
import EditProfile from "./components/Profile/EditProfile";
import "./App.css";

class App extends Component {
  state = {
    loggedIn: false
  };

  componentDidMount() {
    if (Cookies.get("username") === undefined) {
      this.setState({ loggedIn: false });
    } else {
      this.setState({ loggedIn: true });
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.state.loggedIn ? <LoggedInNavbar /> : <LoggedOutNavbar />}
        </div>
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/editProfile" component={EditProfile} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
