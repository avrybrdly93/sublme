import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import LoggedInNavbar from "./components/LoggedInNavbar/LoggedInNavbar";
import Dashboard from "./pages/dashboard";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import LoggedOutNavbar from "./components/LoggedOutNavbar/LoggedOutNavbar";
// import Cookies from "js-cookie";

class App extends Component {
  state = {
    loggedIn: false,
    username: "",
    password: ""
  };

  // componentDidMount() {
  //   if (Cookies.get("username") === undefined) {
  //     this.setState({ loggedIn: false });
  //   } else {
  //     this.setState({ loggedIn: true });
  //   }
  // };

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
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
=======
import Profile from "./pages/profile";
import EditProfile from "./components/Profile/EditProfile";
// import Songs from "./Songs.json";

class DashboardPage extends Component {
  render() {
    return (
      <body>
        <Navbar />
        <Dashboard />
      </body>
    );
  }
}

class App extends Component {
  render() {
    // console.log(Songs);
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Dashboard" component={DashboardPage} />
          <Route exact path="/EditProfile" component={EditProfile} />
        </React.Fragment>
      </Router>
>>>>>>> LidiaNew
    );
  }
}

export default App;
