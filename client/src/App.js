import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/dashboard";
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
    );
  }
}

export default App;
