import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/dashboard";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    );
  }
}

export default App;
