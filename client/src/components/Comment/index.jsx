import React, { Component } from "react";
import Cookies from "js-cookie";
import dbAPI from "../../utils/dbAPI";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Comment extends Component {
  state = {
    content: null,
    username: Cookies.get("username"),
    likes: 0,
    alreadyLiked: false,
    replyIsHidden: true,
    replies: [],
    reply: ""
  };
  componentDidMount() {
    dbAPI.getCommentLikes(this.props.commentid, response => {
      this.setState({ likes: response.data[0].likes });
    });
    dbAPI.getUserCommentLikes(this.state.username, response => {
      let likedComments = response.data[0].likedComments;
      likedComments.map((comment, index) => {
        if (this.props.commentid === comment) {
          this.setState({ alreadyLiked: true });
        }
      });
    });
    axios
      .get("/api/music/comments/replies/" + this.props.commentid)
      .then(response => {
        let reply = [];
        let replyObjs = response.data;
        //console.log(replies);
        replyObjs.map((reply, index) => {
          // console.log(reply.text);
          // reply.push(reply.text);
          // this.setState({ replies: reply.text });
          this.state.replies.push(reply.text);
          //console.log(this.state.replies);
        });
        //console.log("These are our replies: " + JSON.stringify(response.data));
        console.log(this.state.replies);
      });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  likeComment = () => {
    let newLike = this.state.likes + 1;
    let unlike = this.state.likes - 1;
    let { commentid } = this.props;
    let username = Cookies.get("username");

    if (this.state.alreadyLiked) {
      this.setState({ likes: unlike, alreadyLiked: false });
      dbAPI.likeComment(
        unlike,
        commentid,
        username,
        "/api/music/comments/likes/",
        "/api/users/likedComments/remove/"
      );
    } else {
      this.setState({ likes: newLike, alreadyLiked: true });
      dbAPI.likeComment(
        newLike,
        commentid,
        username,
        "/api/music/comments/likes/",
        "/api/users/likedComments/"
      );
    }
  };
  submitReply = event => {
    event.preventDefault();
    axios
      .put("/api/music/comments/replies/" + this.props.commentid, {
        replies: this.state.reply
      })
      .then(responseOne => {
        axios
          .get("/api/music/comments/replies/" + this.props.commentid)
          .then(response => {
            console.log(
              "These are our replies: " + JSON.stringify(response.data[0].text)
            );
            this.setState({ replies: response.data, reply: "" });
            console.log(this.state.replies);
          });
      });
  };

  renderReply = () => {
    this.setState({ replyIsHidden: !this.state.replyIsHidden });
  };
  render() {
    let likeHeart = null;
    if (this.state.alreadyLiked) {
      likeHeart = "fa fa-heart fa-sm";
    } else {
      likeHeart = "far fa-heart fa-sm";
    }
    let renderReplies = this.state.replies.map(reply => (
      <li key={reply.text}>
        <div style={{ color: "black" }}>{reply.text}</div>
      </li>
    ));
    return (
      <React.Fragment>
        <div style={{ color: "black" }}>
          <p>{this.props.comment}</p>
          <img
            alt={this.props.username}
            src={this.props.picURL}
            width="25px"
            height="25px"
          />
          <small>
            {" "}
            {this.props.username} at {this.props.time}
          </small>
          <div>
            <div className="social-icons">
              <span onClick={this.likeComment}>
                <i className={likeHeart} style={{ color: "black" }} />
              </span>
              <span style={{ color: "black" }}>{this.state.likes}</span>

              <div className="space-1" />
              <span onClick={this.renderReply}>
                <i
                  onMouseEnter={() => this.setState({ buttonHovered: true })}
                  onMouseLeave={() => this.setState({ buttonHovered: false })}
                  className={
                    this.state.buttonHovered
                      ? "fa fa-comment fa-sm"
                      : "far fa-comment fa-sm"
                  }
                  style={{ color: "black" }}
                />
              </span>
            </div>
          </div>
        </div>
        {renderReplies}
        <div />
        {!this.state.replyIsHidden && (
          <React.Fragment>
            <TextField
              autoFocus
              margin="dense"
              id="user-comment"
              value={this.state.reply}
              name="reply"
              onChange={this.handleInputChange}
              label="Reply to Comment"
              fullWidth
            />
            <Button onClick={this.submitReply} color="primary">
              Submit Reply
            </Button>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Comment;
