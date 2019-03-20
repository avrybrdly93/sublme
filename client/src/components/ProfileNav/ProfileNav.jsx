import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const styles = {
  root: {
    width: 500
  }
};

class ProfileNav extends React.Component {
  state = {
    value: "recents"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        className={classes.root}>
        <BottomNavigationAction
          label="About"
          value="about"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Sounds"
          value="sounds"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Bullhorns"
          value="bullhorns"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
      </BottomNavigation>
    );
  }
}

ProfileNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileNav);
