import React, { Component } from "react";
import "./App.css";
import LoggedInNavbar from "./components/LoggedInNavbar/LoggedInNavbar";
import Dashboard from "./pages/dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import LoggedOutNavbar from "./components/LoggedOutNavbar/LoggedOutNavbar";

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
            <Route exact path="/upload" component={Upload} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
