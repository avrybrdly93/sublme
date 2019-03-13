import React, { Component } from "react";
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
          width="80"
          height="80"
          src={users.image}
          alt={users.name}
        />
      </li>
    ));
    return <React.Fragment>{profiles}</React.Fragment>;
  }
}

export default ProfileCard;
