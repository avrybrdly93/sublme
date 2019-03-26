import React from "react";
import PropTypes from "prop-types";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%"
  },
  select: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 285
  },
  producedBy: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 293
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

const currencies = [
  {
    value: "Rap",
    label: "Rap"
  },
  {
    value: "Trap",
    label: "Trap"
  },
  {
    value: "Techno",
    label: "Techno"
  },
  {
    value: "R&B",
    label: "R&B"
  },
  {
    value: "Jazz",
    label: "Jazz"
  }
];

class UploadForm extends React.Component {
  state = {
    name: "",
    multiline: "Controlled",
    genre: "Rap",
    checkedB: false
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleCheck = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="outlined-full-width"
          label="Title"
          style={{ margin: 8 }}
          placeholder="Please enter a title"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          style={{ borderColor: "white" }}
        />

        <TextField
          required
          id="outlined-select-genre"
          select
          label="Select"
          className={classes.select}
          value={this.state.currency}
          onChange={this.handleChange("genre")}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Please select genre"
          margin="normal"
          variant="outlined">
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-name"
          label="Produced by"
          helperText="*Optional"
          className={classes.producedBy}
          placeholder="Please enter a producer"
          value={this.state.name}
          onChange={this.handleChange("name")}
          margin="normal"
          variant="outlined"
        />

        <TextField
          required
          id="tags"
          label="Tags"
          multiline
          rows="4"
          defaultValue="Ex. Instrumental, Rap/Hip-hop etc..."
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />

        <FormGroup row className="checkbox">
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.checkedB}
                onChange={this.handleCheck("checkedB")}
                value="checkedB"
                color="primary"
              />
            }
            label={
              <div>
                <span>You agree to our </span>
                <Link href="http://google.com" className={classes.link}>
                  Terms of Use
                </Link>
                <span> and </span>
                <Link href="/" className={classes.link}>
                  Privacy Policy
                </Link>
              </div>
            }
          />
        </FormGroup>

        <button type="button" class="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    );
  }
}

UploadForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UploadForm);
