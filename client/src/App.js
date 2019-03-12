<<<<<<< HEAD
import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/dashboard";
=======
import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import './App.css';
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
>>>>>>> Avery-back

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
        <Navbar />
        <Dashboard />
      </div>
=======
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/login" component={Login}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
>>>>>>> Avery-back
    );
  }
}

export default App;
