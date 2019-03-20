import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ProfileNav from "../components/ProfileNav/ProfileNav";
import ProfileMenu from "../components/ProfileMenu/ProfileMenu";
import "./profile.css";
// import Profile from "./profile";
//import settings from "../../pages/settings";

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
  //import { BrowserRouter as Router, Route } from "react-router-dom";
}

// const styles = theme => ({
//   bigAvatar: {
//     margin: 10,
//     width: 200,
//     height: 200,

//     button: {
//       margin: theme.spacing.unit
//     },
//     root: {
//       flexGrow: 1
//     },

//     input: {
//       display: "center"
//     }
//   }
// });

Settings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Settings);
//export default withStyles(styles)(Profile);

// export default Profile;
