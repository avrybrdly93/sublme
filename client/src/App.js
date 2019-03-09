import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import GridList from "./components/GridList/GridList";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <GridList />
      </div>
    );
  }
}

export default App;
