import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ProfileMenu from "../components/ProfileMenu/ProfileMenu";
import ProfileTabs from "../components/ProfileTabs/ProfileTabs";
import dbAPI from "../utils/dbAPI";
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

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      userType: "",
      bio: "",
      gender: "",
      birthday: "",
      profileImg: "",
      bgImg: ""
    };
  }

  componentDidMount() {
    dbAPI
      .findUser(this.props.match.params.id)
      .then(response => {
        console.log(response.data);
        this.setState({
          username: response.data.username,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          userType: response.data.userType,
          bio: response.data.bioStatement,
          gender: response.data.gender,
          birthday: response.data.birthday,
          profileImg: response.data.profileImage,
          bgImg: response.data.backgroundImage,
          followers: response.data.followers
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { classes } = this.props;

    var bgImg = "url(" + this.state.bgImg + ")";
    return (
      <React.Fragment>
        <div
          className="jumbotron jumbotron-fluid bg"
          style={{
            backgroundImage: bgImg,
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
                  src={this.state.profileImg}
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
                <div className="row name">
                  <div className="col-lg-5 col-1" />
                  <div className="col-lg-1 col-5 username">
                    @{this.state.username}
                  </div>
                  <div className="col-lg-1 col-5 settings">
                    <ProfileMenu />
                  </div>
                  <div className="col-lg-5 col-1" />
                </div>
              </Typography>
              <div className="button">
                <Button
                  variant="outlined"
                  className={classes.button}
                  onClick={this.props.Settings}
                  style={{
                    fontWeight: 50,
                    borderColor: "white",
                    color: "white"
                  }}
                  href="/settings">
                  Follow
                </Button>
              </div>
              <p className="followers">{this.state.followers} followers</p>
            </div>
          </CardContent>
        </div>
        <div className="tabs">
          <ProfileTabs bio={this.state.bio} />
        </div>
      </React.Fragment>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);