import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  },
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 380
  },
  email: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%"
  },
  bio: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 380
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Settings extends React.Component {
  state = {
    open: false,
    expanded: null,
    email: "",
    fName: "",
    lName: "",
    password1: "",
    password2: "",
    bioStatement: "",
    updateHeader: "",
    updateAvatar: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  handleInput = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div>
        <Typography
          variant="subtitle1"
          color="inherit"
          onClick={this.handleClickOpen}>
          Settings
        </Typography>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={this.handleClose}
                aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Settings
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <ExpansionPanel
            expanded={expanded === "panel1"}
            onChange={this.handleChange("panel1")}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                Personal settings
              </Typography>
              <Typography className={classes.secondaryHeading}>
                Email, name, password.
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className="row">
                <div className="col-2" />
                <div className="col-8">
                  <form
                    className={classes.container}
                    noValidate
                    autoComplete="off">
                    <TextField
                      id="email"
                      label="Email"
                      className={classes.email}
                      value={this.state.email}
                      onChange={this.handleInput("email")}
                      margin="normal"
                    />
                    <TextField
                      id="fName"
                      label="First name"
                      className={classes.textField}
                      value={this.state.fName}
                      onChange={this.handleInput("fName")}
                      margin="normal"
                    />
                    <TextField
                      id="lName"
                      label="Last name"
                      className={classes.textField}
                      value={this.state.lName}
                      onChange={this.handleInput("lName")}
                      margin="normal"
                    />
                    <TextField
                      id="password"
                      label="Password"
                      className={classes.textField}
                      value={this.state.password1}
                      onChange={this.handleInput("password1")}
                      margin="normal"
                    />
                    <TextField
                      id="password"
                      label="Confirm Password"
                      className={classes.textField}
                      value={this.state.password2}
                      onChange={this.handleInput("password2")}
                      margin="normal"
                    />
                  </form>
                </div>
                <div className="col-2" />
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel2"}
            onChange={this.handleChange("panel2")}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                Profile settings
              </Typography>
              <Typography className={classes.secondaryHeading}>
                Header, avatar, bio.
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className="row">
                <div className="col-2" />
                <div className="col-8">
                  <div className="row">
                    <label style={{ color: "black" }}>Upload header</label>
                    <div class="js-upload" data-uk-form-custom>
                      <input type="file" single />
                      <button
                        class="uk-button uk-button-default"
                        type="button"
                        tabindex="-1">
                        Select
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <label style={{ color: "black" }}>Upload avatar</label>
                    <div class="js-upload" data-uk-form-custom>
                      <input type="file" single />
                      <button
                        class="uk-button uk-button-default"
                        type="button"
                        tabindex="-1">
                        Select
                      </button>
                    </div>
                  </div>
                  <form
                    className={classes.container}
                    noValidate
                    autoComplete="off">
                    <TextField
                      id="bio"
                      label="Bio"
                      multiline
                      rowsMax="4"
                      value={this.state.bioStatement}
                      onChange={this.handleInput("bio")}
                      className={classes.bio}
                      margin="normal"
                    />
                  </form>
                </div>
                <div className="col-2" />
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Dialog>
      </div>
    );
  }
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Settings);
