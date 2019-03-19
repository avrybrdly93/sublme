import React, { Component } from "react";
import Button from "../Button/Button";
import "./style.css";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-4" />
          <div className="col-4">
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
              <Button text="Submit" />
            </form>
          </div>
          <div className="col-4" />
        </div>
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
