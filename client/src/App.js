import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/dashboard";
// import Songs from "./Songs.json";

class App extends Component {
  render() {
    // console.log(Songs);
    return (
      <React.Fragment>
        <Navbar />
        <Dashboard />
      </React.Fragment>
    );
  }
}

export default App;
