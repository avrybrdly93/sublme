import React, { Component } from "react";
import LoggedInNavbar from "./components/LoggedInNavbar/LoggedInNavbar";
import Dashboard from "./pages/dashboard";
import NoMatch from "./pages/NoMatch";
import Login from "./components/Login";
import Logout from "./pages/Logout";
import LoggedOutNavbar from "./components/LoggedOutNavbar/LoggedOutNavbar";
import Cookies from "js-cookie";
import Profile from "./pages/profile";
import Settings from "./pages/settings";
import Signup from "./components/Signup";
import Upload from "./pages/upload";
import Results from "./pages/results";
import Explore from "./pages/explore";
import ReactPlayer from "./components/ReactPlayer/ReactPlayer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import dbAPI from "./utils/dbAPI";

const routes = [
  {
    path: "/",
    component: Dashboard,
    handleCardClick: () => this.handleCardClick()
  },
  {
    path: "/dashboard",
    component: Dashboard,
    handleCardClick: () => this.handleCardClick()
  }
];

class App extends Component {
  state = {
    loggedIn: false,
    picURL: "",
    username: "",
    playlist: [],
    playlistIsPlaying: false,
    theme: "spotify",
    currentSong: {},
    songs: {}
  };

  componentDidMount() {
    if (Cookies.get("username") === undefined) {
      this.setState({ loggedIn: false });
    } else {
      dbAPI
        .passportFindUser()
        .then(response => {
          console.log("RESPONSE FOR LOGGED IN: " + response.data);
          this.setState({
            loggedIn: true,
            picURL: response.data.profileImage,
            username: response.data.username
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  handleCardClick = e => {
    e.preventDefault();
    // this.setState({ currentSong: song });
    console.log(e);
  };

  render() {
    return (
      <div>
        <div>
          {this.state.loggedIn ? (
            <LoggedInNavbar
              picURL={this.state.picURL}
              username={this.state.username}
            />
          ) : (
            <LoggedOutNavbar />
          )}
        </div>
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/explore" component={Explore} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
