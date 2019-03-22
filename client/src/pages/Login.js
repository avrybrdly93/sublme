import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form/index.js";
import dbAPI from "../utils/dbAPI";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";

class Login extends Component {
  state = {
    loggedIn: false,
    username: "",
    password: ""
  };

  componentDidMount() {
    if (Cookies.get("username") === undefined) {
      this.setState({ loggedIn: false });
    } else {
      this.setState({ loggedIn: true });
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    dbAPI
      .loginUser({
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        //console.log(response);
        if (response.status === 200) {
          this.setState({ loggedIn: true });
        }
      })
      .catch(err => console.log(err));
  };

  renderRedirect = () => {
    if (this.state.loggedIn) {
      return <Redirect to="/dashboard" />;
    }
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <Input
          value={this.state.username}
          onChange={this.handleInputChange}
          name="username"
          placeholder="Enter Username (required)"
        />
        <Input
          value={this.state.title}
          onChange={this.handleInputChange}
          name="password"
          placeholder="Enter Password (required)"
          type="password"
        />
        <FormBtn onClick={this.handleFormSubmit}>Log In!</FormBtn>
      </div>
    );
  }
}

export default Login;
