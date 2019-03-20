import React from "react";
<<<<<<< HEAD
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
<<<<<<<< HEAD:client/src/pages/settings.jsx
// import Profile from "./profile";
========
//import settings from "../../pages/settings";
>>>>>>>> javier-branch:client/src/components/Profile/EditProfile.jsx

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200
  }
});
// const genders = ["woman", "man"];

class Settings extends React.Component {
  state = {
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="col-12">
        <Grid container justify="center" alignItems="center">
          <Avatar
            alt="Picture"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e8/CandymyloveYasu.png"
            className={classes.bigAvatar}
          />
        </Grid>

        <form classUsername={classes.container} noValidate autoComplete="off">
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
            <Typography component="p">Edit your information here</Typography>

            <TextField
              id="outlined-username"
              label="Username"
              className={classes.textField}
              value={this.state.username}
              onChange={this.handleChange("username")}
              margin="normal"
              variant="outlined"
            />

            <TextField
              id="outlined-email-input"
              label="Email"
              className={classes.textField}
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
            />

            <TextField
              id="outlined-password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
            />

            <TextField
              id="outlined-birthday"
              label="Birthday"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-gender"
              label="Gender"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-Profession?"
              label="Who you are?"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </CardContent>
        </form>
      </div>
    );
  }
=======
<<<<<<<< HEAD:client/src/pages/profile.jsx
========
//import { BrowserRouter as Router, Route } from "react-router-dom";
>>>>>>>> javier-branch:client/src/pages/settings.jsx
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
//import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
//import Grid from "@material-ui/core/Grid";
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

function Settings(props) {
  const { classes } = props;

  return (
<<<<<<<< HEAD:client/src/pages/profile.jsx
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
========
    <div className="col-12">
      {/* <Grid container justify="center" alignItems="center">
        <Avatar
          alt="Picture"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e8/CandymyloveYasu.png"
          className={classes.bigAvatar}
        />
      </Grid> */}

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
      <EditProfile/>
    </div>
>>>>>>>> javier-branch:client/src/pages/settings.jsx
  );
>>>>>>> javier-branch
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired
};

<<<<<<< HEAD
export default withStyles(styles)(Settings);
=======
<<<<<<<< HEAD:client/src/pages/profile.jsx
export default withStyles(styles)(Profile);
========
export default withStyles(styles)(Settings);

// export default Profile;
>>>>>>>> javier-branch:client/src/pages/settings.jsx
>>>>>>> javier-branch
