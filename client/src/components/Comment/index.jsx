import React, { Component } from "react";
import Cookies from "js-cookie";
import dbAPI from "../../utils/dbAPI";

class Comment extends Component {
  state = {
    content: null,
    userid: Cookies.get("username"),
    likes: 0,
    alreadyLiked: false
  };

  likeComment = () => {
    let newLike = this.state.likes + 1;
    let unlike = this.state.likes - 1;
    let { commentid } = this.props;
    let username = Cookies.get("username");

    if (this.state.alreadyLiked) {
      this.setState({ likes: unlike, alreadyLiked: false });
      dbAPI.unlike(
        unlike,
        commentid,
        username,
        "/api/music/comments/likes/",
        "/api/users/likedComments/"
      );
    } else {
      this.setState({ likes: newLike, alreadyLiked: true });
      dbAPI.like(
        newLike,
        commentid,
        username,
        "/api/music/comments/likes/",
        "/api/users/likedComments/remove/"
      );
    }
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
              {this.state.likes}
              <div className="space-1" />
              <span onClick={this.openComments}>
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
      </React.Fragment>
    );
  }
}

export default Comment;
