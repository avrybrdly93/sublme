import React, { Component } from "react";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";
import Typography from "@material-ui/core/Typography";
import upcomingUsers from "../../upcomingUsers.json";

class ProfileCard extends Component {
  state = {
    users: upcomingUsers
  };
  render() {
    let users = this.state.users;
    const profiles = users.map(users => (
      <li>
        <img
          className="uk-border-circle"
          width="80"
          height="80"
          key={users.name}
          src={users.image}
          alt={users.name}
          style={{ margin: "auto" }}
        />
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
          {users.name}
        </Typography>
        <Typography
          component="h2"
          variant="display4"
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "100%",
            fontWeight: 100,
            paddingBottom: 10
          }}
          gutterBottom>
          {users.location}
        </Typography>
      </li>
    ));
    return <React.Fragment>{profiles}</React.Fragment>;
  }
}

export default ProfileCard;
