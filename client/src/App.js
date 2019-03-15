import React, { Component } from "react";
import "./App.css";
import LoggedInNavbar from "./components/LoggedInNavbar/LoggedInNavbar";
import Dashboard from "./pages/dashboard";
import LoggedOutNavbar from "./components/LoggedOutNavbar/LoggedOutNavbar";
import Cookies from "js-cookie";

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
      <React.Fragment>
       
       {this.state.loggedIn ? <LoggedInNavbar /> : <LoggedOutNavbar />}
    
       
        <Dashboard />
      </React.Fragment>
    );
  }
}

export default App;
