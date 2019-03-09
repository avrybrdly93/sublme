import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import './App.css';
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
