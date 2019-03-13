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
    const profiles = users.forEach(users => (
      <img
        key={users.id}
        src={users.image}
        className="img-fluid"
        alt={users.name}
      />
    ));
    return <React.Fragment>{profiles}</React.Fragment>;
  }
}

export default ProfileCard;
