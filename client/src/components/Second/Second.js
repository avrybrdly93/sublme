// Import React, BrowserRouter, Link, NavLink, Redirect, Prompt
import React, { Component } from "react";
import Third from "./components/Third";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect,
  Prompt,
  Switch
} from "react-router-dom";
import Route from "react-router-dom/Route";
const User = params => {
  return <h1> Welcome User {params.username} </h1>;
};

class Second extends Component {
  state = {
    loggedIn: false
  };
  loginHandle = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }));
  };
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <NavLink to="/" exact activeStyle={{ color: "green" }}>
              Home
            </NavLink>

            <NavLink to="/second" exact activeStyle={{ color: "green" }}>
              Second Page
            </NavLink>

            <NavLink to="/third" exact activeStyle={{ color: "green" }}>
              Third Page
            </NavLink>

            <NavLink to="/user/john" exact activeStyle={{ color: "green" }}>
              User John
            </NavLink>

            <NavLink to="/user/peter" exact activeStyle={{ color: "green" }}>
              User Peter
            </NavLink>
          </nav>
          <Switch>
            <Route path="/second" component={Second} />
            <Route path="/third" component={Third} />
          </Switch>
          <Prompt
            when={!this.state.loggedIn}
            message={location => {
              return location.pathname.startsWith("/user")
                ? "Are you sure?"
                : true;
            }}
          />

          <input
            type="button"
            value={this.state.loggedIn ? "log out" : "log in"}
            onClick={this.loginHandle.bind(this)}
          />

          <Route
            path="/"
            exact
            strict
            render={() => {
              return <h1>Welcome to Soundr</h1>;
            }}
          />
          <Route
            path="/about"
            exact
            strict
            render={() => {
              return <h1>Welcome About</h1>;
            }}
          />
          <Route
            path="/user/:username"
            exact
            strict
            render={({ match }) =>
              this.state.loggedIn ? (
                <User username={match.params.username} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </div>
      </Router>
    );
  }
}

export default Second;
