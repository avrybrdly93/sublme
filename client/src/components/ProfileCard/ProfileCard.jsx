import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import upcomingUsers from "../../upcomingUsers.json";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";

class ProfileCard extends Component {
  state = {
    users: upcomingUsers
  };
  render() {
    let users = this.state.users;
    const profiles = users.map(users => (
      <li key={users.id}>
        <img
          className="uk-border-circle"
          width="120"
          height="120"
          src={users.image}
          alt={users.name}
          style={{ marginLeft: 115, marginBottom: 10 }}
        />
        <Typography
          component="h2"
          variant="display4"
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "100%",
            fontWeight: 100
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
            fontWeight: 100
          }}>
          {users.location}
        </Typography>
      </li>
    ));
    return <React.Fragment>{profiles}</React.Fragment>;
  }
}

export default ProfileCard;
