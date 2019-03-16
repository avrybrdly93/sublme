import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import profile from "../../pages/profile";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    display: "center",
    flexWrap: "wrap"
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
const genders = [
  { value: "woman", label: "Female" },
  {
    value: "man",
    label: "Male"
  },
  { value: "others", label: "Other" }
];

const professions = [
  { value: "profession", label: "Fan" },

  { value: "profession", label: "Artist" },
  {
    value: "profession",
    label: "Producer"
  }
];

class EditProfile extends React.Component {
  state = {
    name: "Edit the Profile",
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
              id="outlined-date"
              label="Birthday"
              type="date"
              defaultValue="yyyy-MM-dd"
              className={classes.textField}
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
            />
            <TextField
              id="standard-select-gender"
              select
              label="Gender"
              className={classes.textField}
              onChange={this.handleChange("gender")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="Please select your gender"
              margin="normal"
              variant="outlined"
            >
              {genders.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="standard-select-profession"
              select
              label="Profession"
              className={classes.textField}
              onChange={this.handleChange("professions")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="Please select your profession"
              margin="normal"
              variant="outlined"
            >
              {professions.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </CardContent>
        </form>
        <Grid container justify="center" alignItems="center">
          <Button
            variant="outlined"
            size="large"
            color="black"
            className={classes.margin}
          >
            Submit
          </Button>
        </Grid>
      </div>
    );
  }
}

EditProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EditProfile);
