import React, { Component } from "react";
import "./style.css";

class Signup extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2" />
          <div className="col-8">
            <form>
              <div className="col-input">
                <label htmlFor="inputEmail4">Email</label>
                <input
                  className="form-control"
                  id="inputEmail4"
                  type="email"
                  placeholder="email@icloud.com"
                />
                <label htmlFor="inputPassword4">Username</label>
                <input
                  className="form-control"
                  id="inputPassword4"
                  type="text"
                  placeholder="johnnyappleseed"
                />
              </div>
              {/* create a dif div so I can have them look the same */}
              <div className="form-row confirm">
                <div className="row">
                  <div className="column">
                    <div className="shrink1">
                      <label htmlFor="inputEmail4">Password</label>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="******"
                      />
                    </div>
                  </div>
                </div>

                {/* <div class="form-row"> */}
                <div className="column">
                  <div classname="shrink2">
                    <label htmlFor="inputEmail4">Confirm Password</label>

                    <input
                      className="passwordInput"
                      type="password"
                      placeholder="******"
                    />
                  </div>
                </div>
              </div>

              <div className="form-row genbir">
                <div className="col">
                  <label htmlFor="inputState">Gender</label>
                  <select className="form-control" id="inputState">
                    <option selected>Choose..</option>
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
                  />
                </div>
              </div>
              <label htmlFor="inputState">Profile Picture</label>
              <div className="custom-file">
                <input
                  className="custom-file-input"
                  id="validatedCustomFile"
                  required
                  type="file"
                />
                <label
                  className="custom-file-label"
                  htmlFor="validatedCustomFile">
                  Choose file...
                </label>
                <div className="invalid-feedback">
                  Example invalid custom file feedback
                </div>
              </div>
              <br />
              <div className="form-group col-md-12">
                <label htmlFor="inputState">Who are you?</label>
                <select className="form-control" id="inputState">
                  <option select>Who are you</option>
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
                  <label htmlFor="checkbox" /> You agree to our
                  <div className="popup" onclick="openTerms()">
                    Terms of Service
                    <span className="popuptext" id="termsPopup">
                      <header>X</header>TERMS OF SERVICE:
                      <br />
                      <br /> Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Pellentesque nec nam aliquam sem et.
                      Phasellus aliquam cursus tincidunt. Mauris auctor, dui in
                      feugiat pulvinar, velit purus porttitor turpis, ut lacinia
                      tellus turpis porttitor augue. Cras vitae elementum dui,
                      et ultricies eros.{" "}
                    </span>
                  </div>{" "}
                  and{" "}
                  <div className="popup" onclick="openPrivacy()">
                    <a href="/">Privacy Policy</a>
                    <span className="popuptext" id="privacyPopup">
                      <header>X</header>Privacy Policy:
                      <br />
                      <br /> Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Pellentesque nec nam aliquam sem et.
                      Phasellus aliquam cursus tincidunt. Mauris auctor, dui in
                      feugiat pulvinar, velit purus porttitor turpis, ut lacinia
                      tellus turpis porttitor augue. Cras vitae elementum dui,
                      et ultricies eros.{" "}
                    </span>
                  </div>
                  <br />
                  <br />
                  <button className="button" style={{ textAlign: "center" }}>
                    <span>Submit </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-2" />
        </div>
      </div>
    );
  }
}

export default Signup;

// {/* <meta charSet="utf-8" />
// <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
// <title>Sublme</title>
// <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// <link
//   href="signup.css"
//   rel="stylesheet"
//   type="text/css"
//   media="screen"
// />
// <link href="signup.js" rel="stylesheet" type="text/js media=" screen />
// <link
//   href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//   rel="stylesheet"
//   integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
//   crossOrigin="anonymous"
// />
// <link
//   href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
//   rel="stylesheet"
// />
// <meta name="viewport" content="width=device-width, initial-scale=1" />
// <link href="css/uikit.min.css" rel="stylesheet" />
// <link
//   href="https://www.w3schools.com/w3css/4/w3.css"
//   rel="stylesheet"
// /> */}
// {/* form inputs, need to create a dif div for the section after username  */}
// {/* <div class="col-xl-10"> */}
