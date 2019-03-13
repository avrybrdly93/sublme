import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import Songs from "../../Songs.json";

const styles = theme => ({
  card: {
    display: "flex",
    height: 250,
    width: 250
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 250,
    height: 250
  },
  controls: {
    color: "white",
    textAlign: "center",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  },
  roundedCircle: {
    height: 50,
    width: 50,
    borderRadius: 100
  },
  trackInfo: {
    color: "white"
  },
  producer: {
    color: "white",
    mixBlendMode: "difference"
  }
});

class MusicCard extends Component {
  state = {
    songs: Songs
  };
  render() {
    const { classes, theme } = this.props;

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
                <Typography
                  component="h5"
                  variant="h5"
                  className={classes.trackInfo}>
                  {songs.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  className={classes.trackInfo}>
                  {songs.artist}
                </Typography>
                <Typography variant="caption" className={classes.producer}>
                  Produced by {songs.producer}
                </Typography>
              </CardContent>
            </div>
            <div className={classes.controls}>
              <IconButton aria-label="Previous">
                {theme.direction === "rtl" ? (
                  <SkipNextIcon />
                ) : (
                  <SkipPreviousIcon />
                )}
              </IconButton>
              <IconButton aria-label="Play/pause">
                <PlayArrowIcon className={classes.playIcon} />
              </IconButton>
              <IconButton aria-label="Next">
                {theme.direction === "rtl" ? (
                  <SkipPreviousIcon />
                ) : (
                  <SkipNextIcon />
                )}
              </IconButton>
            </div>
          </CardMedia>
        </Card>
      </li>
    ));

    return <React.Fragment>{renderCards}</React.Fragment>;
  }
}

export default withStyles(styles, { withTheme: true })(MusicCard);
