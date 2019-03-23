import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import dbAPI from "../../utils/dbAPI";
import axios from "axios";
import "./style.css";

class Signup extends Component {
  state = {
    loggedIn: false,
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordTwo: "",
    bioStatement: "",
    gender: "",
    birthday: "",
    userType: "",
    signupErrMsg: "",
    errCreatingUser: false
  };

  componentDidMount() {
    if (Cookies.get("username") === undefined) {
      this.setState({ loggedIn: false });
    } else {
      this.setState({ loggedIn: true });
    }
  }

  renderRedirect = () => {
    if (this.state.loggedIn) {
      return <Redirect to="/dashboard" />;
    }
  };

  handleChange = ev => {
    this.setState({ success: false, url: "" });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleUpload = ev => {
    ev.preventDefault();
    if (this.state.password === this.state.passwordTwo) {
      let fileOne = this.uploadInputOne.files[0];
      let fileTwo = this.uploadInputTwo.files[0];

      let fileOneParts = this.uploadInputOne.files[0].name.split(".");
      let fileTwoParts = this.uploadInputTwo.files[0].name.split(".");

      let fileOneType = fileOneParts[1];
      let fileTwoType = fileTwoParts[1];

      let fileOneName = this.state.username + Date.now().toString() + "-img";
      let fileTwoName = this.state.username + Date.now().toString() + "-bg";

      let fileOneSize = this.uploadInputOne.files[0].size / 1024 / 1024;
      let fileTwoSize = this.uploadInputTwo.files[0].size / 1024 / 1024;

      dbAPI
        .createUser({
          imageOneName: fileOneName,
          imageOneType: fileOneType,
          imageOneSize: fileOneSize,
          imageTwoName: fileTwoName,
          imageTwoType: fileTwoType,
          imageTwoSize: fileTwoSize,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          bioStatement: this.state.bioStatement,
          gender: this.state.gender,
          birthday: this.state.birthday,
          userType: this.state.userType,
          email: this.state.email,
          username: this.state.username,
          password: this.state.password
        })
        .then(response => {
          if (response.data.success === false) {
            this.setState({
              errCreatingUser: true,
              signupErrMsg: response.data.errMsg
            });
          } else {
            var returnData = response.data.data.returnData;
            var signedRequestOne = returnData.signedRequestOne;
            var urlOne = returnData.urlOne;
            var signedRequestTwo = returnData.signedRequestTwo;
            var urlTwo = returnData.urlTwo;
            console.log("URL File One: " + urlOne);
            console.log("URL File Two: " + urlTwo);

            var optionsOne = {
              headers: {
                "Content-Type": fileOneType
              }
            };

            var optionsTwo = {
              headers: {
                "Content-Type": fileTwoType
              }
            };

            axios
              .put(signedRequestOne, fileOne, optionsOne)
              .then(resultOne => {
                axios
                  .put(signedRequestTwo, fileTwo, optionsTwo)
                  .then(resultTwo => {
                    this.setState({ loggedIn: true });
                  })
                  .catch(error => {
                    console.log("ERROR File 2: " + JSON.stringify(error));
                  });
              })
              .catch(error => {
                console.log("ERROR File 1: " + JSON.stringify(error));
              });
          }
        })
        .catch(error => {
          //alert(JSON.stringify(error));
          console.log(error);
        });
    } else {
      this.setState({
        errCreatingUser: true,
        signupErrMsg: "Passwords Must Match"
      });
    }
  };

  render() {
    const ErrorMessage = () => (
      <div style={{ padding: 50 }}>
        <h3 style={{ color: "white" }}>{this.state.signupErrMsg}</h3>
        <br />
      </div>
    );

    return (
      <div className="container-fluid form">
        <div className="row">
          <div className="col-3" />
          {this.renderRedirect()}
          <div className="col-6">
            <form>
              <div className="row">
                <label htmlFor="inputEmail4">Email</label>
                <input
                  className="form-control"
                  id="inputEmail4"
                  type="email"
                  placeholder="email@icloud.com"
                  onChange={this.handleInputChange}
                  name="email"
                  value={this.state.email}
                />
              </div>

              <div className="row">
                <label htmlFor="inputPassword4">Username</label>
                <input
                  className="form-control"
                  id="inputPassword4"
                  type="text"
                  placeholder="johnnyappleseed"
                  onChange={this.handleInputChange}
                  name="username"
                  value={this.state.username}
                />
              </div>

              <div className="row">
                <label htmlFor="firstNameInput">First Name</label>
                <input
                  className="form-control"
                  id="firstNameInput"
                  type="text"
                  placeholder="Johnny"
                  onChange={this.handleInputChange}
                  name="firstName"
                  value={this.state.firstName}
                />
              </div>

              <div className="row">
                <label htmlFor="lastNameInput">Last Name</label>
                <input
                  className="form-control"
                  id="lastNameInput"
                  type="text"
                  placeholder="Appleseed"
                  onChange={this.handleInputChange}
                  name="lastName"
                  value={this.state.lastName}
                />
              </div>

              {/* create a dif div so I can have them look the same */}
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="*******"
                    onChange={this.handleInputChange}
                    name="password"
                    value={this.state.password}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">Confirm Password</label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="*******"
                    onChange={this.handleInputChange}
                    name="password"
                    value={this.state.password}
                  />
                </div>
              </div>

              {/* </div> */}

              <div className="form-row genbir">
                <div className="col">
                  <label htmlFor="inputGender">Gender</label>
                  <select
                    className="form-control"
                    id="inputGender"
                    onChange={this.handleInputChange}
                    name="gender"
                    value={this.state.gender}
                  >
                    <option defaultValue>Choose..</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="col">
                  <label htmlFor="start">Birthday</label>
                  <input
                    name="birthday"
                    className="form-control"
                    id="start"
                    type="date"
                    value={this.state.birthday}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>

              <label htmlFor="profile-img">Profile Picture</label>
              <div className="custom-file">
                <input
                  className="custom-file-input"
                  id="profile-img"
                  required
                  onChange={this.handleChange}
                  ref={ref => {
                    this.uploadInputOne = ref;
                  }}
                  type="file"
                />
                <label
                  className="custom-file-label"
                  htmlFor="validatedCustomFile"
                >
                  Choose file...
                </label>
                <div className="invalid-feedback">
                  Example invalid custom file feedback
                </div>
              </div>
              <br />

              <br />

              <div className="form-group col-md-12">
                <label htmlFor="inputState">Who are you?</label>
                <select
                  className="form-control"
                  id="inputState"
                  onChange={this.handleInputChange}
                  name="userType"
                  value={this.state.userType}
                >
                  <option defaultValue>Who are you</option>
                  <option>Fan</option>
                  <option>Artist</option>
                  <option>Producer</option>
                </select>
              </div>
              <br />

              {/* style and add link to terms & service  */}
              <div className="container">
                <div className="round">
                  <input id="checkbox" type="checkbox" />
                  <label htmlFor="checkbox" /> You agree to our Terms of Service
                  and Privacy Policy
                  <br />
                  <br />
                  <button
                    className="button"
                    style={{ textAlign: "center" }}
                    onClick={this.handleUpload}
                  >
                    <span>Submit </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-3" />
          {this.state.errCreatingUser ? <ErrorMessage /> : null}
        </div>
      </div>
    );
  }
}

export default Signup;
