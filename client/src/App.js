import React, { Component } from "react";
import LoggedInNavbar from "./components/LoggedInNavbar/LoggedInNavbar";
import Dashboard from "./pages/dashboard";
import NoMatch from "./pages/NoMatch";
import Login from "./components/Login";
import LoggedOutNavbar from "./components/LoggedOutNavbar/LoggedOutNavbar";
import Cookies from "js-cookie";
import Profile from "./pages/profile";
import Settings from "./pages/settings";
import NoMatch from "./pages/NoMatch";
import "./App.css";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Upload from "./pages/Upload";
//import EditProfile from "./components/Profile/EditProfile";
// import "./App.css";
import dbAPI from "./utils/dbAPI";

class App extends Component {
  state = {
    loggedIn: false,
    picURL: "",
    username: ""
  };

  componentDidMount() {
    if (Cookies.get("username") === undefined) {
      this.setState({ loggedIn: false });
    } 
    else {
      dbAPI.passportFindUser().then(response =>{
        console.log("RESPONSE FOR LOGGED IN: "+response.data);
        this.setState({ 
          loggedIn: true,
          picURL: response.data.profileImage,
          username: response.data.username
        });
      }).catch(err=>{
        console.log(err);
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.state.loggedIn ? <LoggedInNavbar picURL={this.state.picURL} username={this.state.username} /> : <LoggedOutNavbar />}
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
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
