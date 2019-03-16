import React, { Component } from "react";
import "./App.css";
//import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Upload from "./pages/Upload";

class App extends Component {
  render() {
    return (
      <div>
        {/* <div>
          <Navbar />
          <Dashboard />
        </div> */}
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
