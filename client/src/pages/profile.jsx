import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import "../App.css";
import Youtube from "../components/Profile/youtube.js";
// import Card from "@material-ui/core/Card";
// import CardMedia from "@material-ui/core/CardMedia";
// import IconButton from "@material-ui/core/IconButton";
// import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
// import PlayArrowIcon from "@material-ui/icons/PlayArrow";
// import SkipNextIcon from "@material-ui/icons/SkipNext";

const Styles = theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200,

    button: {
      margin: theme.spacing.unit
    },
    root: {
      flexGrow: 1
    },

    input: {
      display: "center"
    }
  }
});

function Profile(props) {
  const { classes } = props;

  return (
    <div className="col-12">
      <Grid container justify="center" alignItems="center">
        <Avatar
          alt="Picture"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e8/CandymyloveYasu.png"
          className={classes.bigAvatar}
        />
      </Grid>
      <CardContent container justify="center" alignItems="center">
        <Typography gutterBottom variant="h5" component="h2">
          Profile
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          @HelloWorld2019
        </Typography>
        <Typography component="p">
          Some description that will come after ajax call
        </Typography>

        <Button
          variant="outlined"
          className={classes.button}
          onClick={props.EditProfile}
          href="/EditProfile"
        >
          Edit
        </Button>

        <Button
          variant="outlined"
          className={classes.button}
          onClick={props.EditProfile}
          href="/dashboard"
        >
          Log out
        </Button>
        <AppBar position="static">
          {/* <Tabs
            // value={this.state.value}
            // onChange={this.handleChange}
            indicatorColor="default"
            textColor="default"
            centered
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs> */}
        </AppBar>
      </CardContent>
      {/* <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Mac Miller
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="Previous">
              {Youtube.direction === "rtl" ? (
                <SkipNextIcon />
              ) : (
                <SkipPreviousIcon />
              )}
            </IconButton>
            <IconButton aria-label="Play/pause">
              <PlayArrowIcon
                className={classes.playIcon}
                onClick={props.Youtube}
              />
            </IconButton> */}
      <Youtube />
      {/* <IconButton aria-label="Next">
              {Youtube.direction === "rtl" ? (
                <SkipPreviousIcon />
              ) : (
                <SkipNextIcon />
              )}
            </IconButton>
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image="/static/images/cards/live-from-space.jpg"
          title="Live from space album cover"
        />
      </Card> */}
    </div>
  );
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(Styles)(Profile);
