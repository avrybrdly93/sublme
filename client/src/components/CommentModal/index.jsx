import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import dbAPI from "../../utils/dbAPI";
import Comment from "../Comment";
import axios from "axios";

class CommentModal extends Component {
  state = {
    comments: [],
    newComment: ""
  };

  componentDidMount() {
    dbAPI.getComments(this.props.songid, response => {
      // response.data.map(() => {});
      this.setState({ comments: response.data });
      //console.log(this.state.comments);
    });
  }
  submitComment = event => {
    event.preventDefault();
    axios
      .put("/api/music/comments/" + this.props.songid, {
        comments: this.state.newComment
      })
      .then(responseOne => {
        axios
          .get("/api/music/comments/" + this.props.songid)
          .then(responseTwo => {
            console.log("THIS SHOULD BE COMMENTS: " + responseTwo.data);
            this.setState({ comments: responseTwo.data, newComment: "" });
          });
      });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    let renderComments = this.state.comments.map(comment => (
      <li key={comment._id}>
        <Comment
          //userid={this.props.userid[index]}
          songid={this.props.songid}
          commentid={comment._id}
          comment={comment.text}
          picURL={comment.writerPic}
          username={comment.writerName}
          time={comment.dateCreated}
        />
      </li>
    ));
    return (
      <React.Fragment>
        <DialogTitle id="form-dialog-title">Comments</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please add a comment about this track.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="user-comment"
            value={this.state.newComment}
            name="newComment"
            onChange={this.handleInputChange}
            label="Insert Comment"
            fullWidth
          />
          {renderComments}
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={this.submitComment} color="primary">
            Submit
          </Button>
        </DialogActions>
      </React.Fragment>
    );
  }
}

export default CommentModal;
