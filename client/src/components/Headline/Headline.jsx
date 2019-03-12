import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Headlines from "../../Headlines.json";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";

class Headline extends Component {
  state = { users: Headlines };
  render() {
    return (
      <Typography
        component="h2"
        variant="display4"
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "100%",
          fontWeight: 100,
          paddingBottom: 10
        }}>
        {users.healines}
      </Typography>
    );
  }
}

export default Headline;
