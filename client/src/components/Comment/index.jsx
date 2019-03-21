import React, { Component } from "react";
import Cookies from "js-cookie";

class Comment extends Component {
  state = {
    content: null,
    userid: Cookies.get("username")
  };

  render() {
    return (
      <div style={{ color: "#000" }}>
        {this.props.comment} - {this.state.userid}
      </div>
    );
  }
}

export default Comment;
