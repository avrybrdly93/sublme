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
      //console.log(response.data[0].likes);
      this.setState({ likes: response.data[0].likes });
    });
    dbAPI.getUserCommentLikes(this.state.username, response => {
      let likedComments = response.data[0].likedComments;
      //console.log(likedComments);
      //console.log(this.props.commentid);
      likedComments.map((comment, index) => {
        console.log(this.props.commentid);
        if (this.props.commentid === comment) {
          console.log("this comment has already been liked");
          this.setState({ alreadyLiked: true });
        }
      });
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
          .then(responseTwo => {
            console.log("THIS SHOULD BE REPLIES: " + responseTwo.data);
            this.setState({ replies: responseTwo.data, reply: "" });
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
