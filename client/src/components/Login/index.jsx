import React, { Component } from "react";
import "./style.css";

var LoginField = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Sublme</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          type="css"
          media="screen"
          href="login.css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
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
});

export default LoginField;
