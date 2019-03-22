import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Youtube from "../components/Profile/youtube.js";
import "../App.css";
import "../components/Profile/profile.css";

const Styles = theme => ({
  card: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
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
    height: 200
  },

  button: {
    margin: theme.spacing.unit
  },
  root: {
    flexGrow: 1
  },

  input: {
    display: "center"
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
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
      <div>
        <CardContent container justify="center" alignItems="center">
          <Typography gutterBottom variant="h5" component="h2" align="center">
            Profile
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            @HelloWorld2019
          </Typography>
          <Typography component="p" align="center">
            Some description that will come after ajax call
          </Typography>

          <div class="buttons">
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
              align="center"
              className={classes.button}
              onClick={props.EditProfile}
              href="/dashboard"
            >
              Log out
            </Button>
          </div>
          <AppBar position="static" />
        </CardContent>
      </div>
      <div class="col-12">
        <Youtube />
      </div>
    </div>
  );
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(Styles)(Profile);
