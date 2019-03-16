import React, { Component } from "react";
import axios from "axios";

class Comment extends Component {
  state = {
    content: null
  };
  render() {
    return <div>{this.props.comment}</div>;
  }
}

export default Comment;
