import React, { Component } from "react";
import "./style.css";

class Login extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        /> */}
        {/* <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        /> */}
        <form>
          <div className="col-input">
            <label htmlFor="inputEmail4">Username</label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              placeholder="johnnyappleseed"
            />
            <label htmlFor="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="*****"
            />
          </div>
          <br />
          <br />
          <button className="button" style={{ textAlign: "center" }}>
            <span>Submit </span>
          </button>
        </form>
      </div>
    );
  }
}

export default Login;

// var LoginField = React.createClass({
//   render: function() {
//     return (

//     );
//   }
// });

// export default LoginField;
