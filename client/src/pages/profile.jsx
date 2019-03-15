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
import EditProfile from "../components/Profile/EditProfile";

const styles = theme => ({
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
    </div>
  );
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);

// export default Profile;
