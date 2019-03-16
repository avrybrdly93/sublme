import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./style.css";
import axios from "axios";
import CommentModal from "../CommentModal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = theme => ({
  card: {
    display: "flex",
    height: 250,
    width: 350
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 500,
    height: 350
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

function play(song) {}

function MusicCard(props) {
  const { classes } = props;

  const [open, setOpen] = React.useState(false);

  function openComments() {
    console.log("opened");
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  let songLikes = {
    likes: 0
  };
  axios.get("/api/music/" + props.songID).then(response => {
    console.log(response.data);
    songLikes.likes = response.data.likes;
  });
  // axios.get("/api/music/" + props.songID).then(response => {
  //   console.log(response.data);
  //   songLikes.likes = response.data.likes + 1;
  // });
  function likeSong() {
    songLikes.likes++;
    axios.put("/api/music/" + props.songID, songLikes).then(response => {
      console.log("updated");
      //console.log(response);
    });
  }

  return (
    <React.Fragment>
      <Card className={classes.card} songID={props.songID}>
        <CardMedia
          className={classes.cover}
          image={props.cover}
          title={props.coverTitle}
        >
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <img
                src={props.profilePic}
                alt={props.alt}
                className={classes.roundedCircle}
              />
              <Typography variant="body1" className="producer">
                Produced by {props.producer}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                className="track-info artist"
              >
                {props.artist}
              </Typography>
              <Typography variant="h5" className="track-info">
                {props.title} {props.likes}
              </Typography>
            </CardContent>
          </div>
          <div className="controls">
            <a href="/" className="backward-btn">
              <i className="fas fa-step-backward fa-2x" />
            </a>
            <a href="/" className="play-btn">
              <i onClick={play()} className="far fa-play-circle fa-3x" />
            </a>
            <a href="/" className="forward-btn">
              <i className="fas fa-step-forward fa-2x" />
            </a>
          </div>
          <div className="social-icons">
            <span onClick={likeSong}>
              <i className="far fa-heart fa-sm" />
            </span>
            <div className="space-1" />
            <span onClick={openComments}>
              <i className="far fa-comment fa-sm" />
              <Dialog
                open={open}
                onClose={handleClose}
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
                    id="name"
                    label="Insert Comment"
                    type="email"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="danger">
                    Cancel
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    Submit
                  </Button>
                </DialogActions>
              </Dialog>
            </span>
          </div>
        </CardMedia>
      </Card>
    </React.Fragment>
  );
}

export default withStyles(styles, { withTheme: true })(MusicCard);
