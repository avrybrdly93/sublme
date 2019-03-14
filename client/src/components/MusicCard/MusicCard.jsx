import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Songs from "../../Songs.json";
import "./style.css";

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

class MusicCard extends Component {
  state = {
    songs: Songs
  };
  render() {
    const { classes } = this.props;

    let songs = this.state.songs;
    const renderCards = songs.map(songs => (
      <li key={songs.id}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cover}
            image={songs.cover}
            title={songs.artist}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <img
                  src={songs.profilePic}
                  alt={songs.artist}
                  className={classes.roundedCircle}
                />
                <Typography variant="body1" className="producer">
                  Produced by {songs.producer}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className="track-info artist">
                  {songs.artist}
                </Typography>
                <Typography variant="h5" className="track-info">
                  {songs.title}
                </Typography>
              </CardContent>
            </div>
            <div className="controls">
              <a href="/" className="backward-btn">
                <i className="fas fa-step-backward fa-2x" />
              </a>
              <a href="/" className="play-btn">
                <i className="far fa-play-circle fa-3x" />
              </a>
              <a href="/" className="forward-btn">
                <i className="fas fa-step-forward fa-2x" />
              </a>
            </div>
            <div className="social-icons">
              <a href="/">
                <i className="far fa-heart fa-sm" />
              </a>
              <div className="space-1" />
              <a href="/">
                <i className="far fa-comment fa-sm" />
              </a>
            </div>
          </CardMedia>
        </Card>
      </li>
    ));

    return <React.Fragment>{renderCards}</React.Fragment>;
  }
}

export default withStyles(styles, { withTheme: true })(MusicCard);
