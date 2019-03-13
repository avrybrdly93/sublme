import React, { Component } from "react";
import "./App.css";
import LoggedInNavbar from "./components/LoggedInNavbar/LoggedInNavbar";
import Dashboard from "./pages/dashboard";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <LoggedInNavbar />
        <Dashboard />
      </React.Fragment>
    );
  }
}

export default App;
