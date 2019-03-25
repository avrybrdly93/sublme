import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";

class ProfileCard extends Component {
  render() {
    return (
      <React.Fragment>
        <img
          className="uk-border-circle"
          src={this.props.image}
          alt={this.props.name}
          style={{ marginLeft: 115, marginBottom: 10, width: 120, height: 120 }}
        />
        <Typography
          component="h2"
          variant="display4"
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "100%",
            fontWeight: 100
          }}
        >
          {this.props.name}
        </Typography>
        <Typography
          component="h2"
          variant="display4"
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "100%",
            fontWeight: 100
          }}
        >
          {this.props.location}
        </Typography>
      </React.Fragment>
    );
  }
}

export default ProfileCard;
