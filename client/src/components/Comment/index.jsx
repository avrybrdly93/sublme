import React, { Component } from "react";

class Comment extends Component {
  state = {
    content: null
  };
  render() {
    return <div>{this.props.comment}</div>;
  }
}

export default Comment;
