import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import Slider from "../Slider/Slider";
import "./style.css";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Comment from "../Comment";
import dbAPI from "../../utils/dbAPI";
import Cookies from "js-cookie";

const styles = theme => ({
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  playIcon: {
    height: 38,
    width: 38
  },
  roundedCircle: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginBottom: 80
  }
});

class MusicCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      active: false,
      open: false,
      comments: [],
      newComment: "",
      alreadyLiked: false,
      buttonHovered: false
    };
  }

  componentDidMount() {
    let username = Cookies.get("username");
    dbAPI.getMusic(this.props.songid, response => {
      this.setState({ likes: response.data.likes });
    });
    dbAPI.getLikes(username, response => {
      let likedSongs = response.data[0].likedMusic;
      likedSongs.map((song, index) => {
        if (this.props.songid === song) {
          this.setState({ alreadyLiked: true });
        }
      });
    });
  }
  play = song => {};

  openComments = () => {
    this.setState({ open: true });
    dbAPI.getComments(this.props.songid, response => {
      // response.data.map(() => {});
      this.setState({ comments: response.data });
      console.log(this.state.comments);
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  submitComment = event => {
    event.preventDefault();
    // dbAPI.sendComment(
    //   this.props.songid,
    //   this.state.newComment,
    //   dbAPI.getComments(this.props.songid, response => {
    //     response.data.map(comment => {
    //       console.log(comment);
    //     });
    //     this.setState({ comments: response.data, newComment: "" });
    //   })
    // );

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

  likeSong = () => {
    let newLike = this.state.likes + 1;
    let unlike = this.state.likes - 1;
    let { songid } = this.props;
    let username = Cookies.get("username");

    if (this.state.alreadyLiked) {
      this.setState({ likes: unlike, alreadyLiked: false });
      dbAPI.unlike(unlike, songid, username);
    } else {
      this.setState({ likes: newLike, alreadyLiked: true });
      dbAPI.like(newLike, songid, username);
    }
  };

  render() {
    const { classes, ...other } = this.props;
    let renderComments = this.state.comments.map(comment => (
      <li key={comment._id}>
        <Comment
          //userid={this.props.userid[index]}
          songid={this.props.songid}
          comment={comment.text}
          picURL={comment.writerPic}
          username={comment.writerName}
          time={comment.dateCreated}
        />
      </li>
    ));
    let likeHeart = null;
    if (this.state.alreadyLiked) {
      likeHeart = "fa fa-heart fa-sm";
    } else {
      likeHeart = "far fa-heart fa-sm";
    }
    return (
      <React.Fragment>
        <Card className={classes.card} songid={this.props.songid}>
          <CardMedia
            className={classes.cover}
            image={this.props.cover}
            title={this.props.coverTitle}
          >
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <img
                  src={this.props.profilePic}
                  alt={this.props.alt}
                  className={classes.roundedCircle}
                />
                <Typography variant="body1" className="producer">
                  Produced by {this.props.producer}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className="track-info artist"
                >
                  {this.props.artist}
                </Typography>
                <Typography variant="h5" className="track-info">
                  {this.props.title}
                </Typography>
              </CardContent>
            </div>
            <div className="controls" {...other}>
              <i className="fas fa-step-backward fa-2x" />
              <i
                className={
                  this.state.active
                    ? "far fa-pause-circle fa-3x play-pause-btn"
                    : "far fa-play-circle fa-3x play-pause-btn"
                }
              />
              <i className="fas fa-step-forward fa-2x" />
            </div>
            <div className="social-icons">
              <span onClick={this.likeSong}>
                <i className={likeHeart} />
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
                />
              </span>
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
              >
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
                  <Button onClick={this.handleClose} color="secondary">
                    Cancel
                  </Button>
                  <Button onClick={this.submitComment} color="primary">
                    Submit
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </CardMedia>
        </Card>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MusicCard);
