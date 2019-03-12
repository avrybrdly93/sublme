import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import YouTube from "./youtube";
import App from "./App";


const Main = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/App" component={App} />
      <Route exact path="/youtube" component={YouTube} />
    </div>
  </Router>
);

export default Main;
