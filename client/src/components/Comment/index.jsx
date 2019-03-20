import React, { Component } from "react";

class Comment extends Component {
  state = {
    content: null,
    userid: 18681
  };
  render() {
    return (
      <div>
        {this.props.comment} - {this.state.userid}
      </div>
    );
  }
}

export default Comment;