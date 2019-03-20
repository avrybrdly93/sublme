import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ProfileNav from "../components/ProfileNav/ProfileNav";
import ProfileMenu from "../components/ProfileMenu/ProfileMenu";
import "./profile.css";

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
    <React.Fragment>
      <div
        className="jumbotron jumbotron-fluid bg"
        style={{
          backgroundImage: "url(/assets/images/bg/kakashi.png)",
          backgroundSize: "cover"
        }}>
        <div className="container" />
      </div>
      <div className="col-12">
        <CardContent justify="center">
          <div className="profile">
            <Grid container justify="center" alignItems="center">
              <Avatar
                alt="Picture"
                src="/assets/images/profiles/kakashi.jpg"
                className="bigAvatar"
              />
            </Grid>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: 500
              }}>
              @kakashi
              <ProfileMenu style={{ marginLeft: 30 }} />
            </Typography>
          </div>
          <div className="content">
            <Typography
              gutterBottom
              variant="caption"
              component="h2"
              style={{ textAlign: "center", color: "white", fontWeight: 500 }}>
              City, State
            </Typography>
            <Typography
              component="p"
              style={{
                margin: "0 auto",
                textAlign: "center",
                color: "white",
                fontWeight: 50,
                width: 500
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              pretium mattis urna, at porta massa ultrices nec.
            </Typography>

            <Button
              variant="outlined"
              className={classes.button}
              onClick={props.Settings}
              style={{
                margin: "0 auto",
                borderColor: "white",
                color: "white",
                fontWeight: 50
              }}
              href="/settings">
              Follow
            </Button>
          </div>
        </CardContent>
      </div>
      <ProfileNav />
    </React.Fragment>
  );
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
