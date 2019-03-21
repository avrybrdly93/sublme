import React, { Component } from "react";

class Comment extends Component {
  state = {
    content: null,
    userid: 18681
  };
  render() {
    return (
      <div style={{color: 'black'}}>
        <p>{this.props.comment}</p>
        <img alt={this.props.username} src={this.props.picURL} width="25px" height="25px"/><small> {this.props.username} at {this.props.time}</small>
        <br/>
        <br/>
      </div>
    );
  }
}

export default Comment;
