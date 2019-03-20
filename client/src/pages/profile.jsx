import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
// import ProfileNav from "../components/ProfileNav/ProfileNav";
import ProfileMenu from "../components/ProfileMenu/ProfileMenu";
import ProfileTabs from "../components/ProfileTabs/ProfileTabs";
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
              <div className="row">
                <div className="col-5" />
                <div className="col-1">@kakashi</div>
                <div className="col-1">
                  <ProfileMenu />
                </div>
                <div className="col-5" />
              </div>
              <div className="row">
                <div className="col-5" />
                <div className="col-2">
                  <Button
                    variant="outlined"
                    className={classes.button}
                    onClick={props.Settings}
                    style={{
                      margin: "0 auto",
                      fontWeight: 50,
                      borderColor: "white",
                      color: "white"
                    }}
                    href="/settings">
                    Follow
                  </Button>
                </div>
                <div className="col-5" />
              </div>
            </Typography>
          </div>
        </CardContent>
      </div>
      <ProfileTabs />
    </React.Fragment>
  );
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
