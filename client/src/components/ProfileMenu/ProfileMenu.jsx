import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Settings from "../Settings/Settings";
import { Link } from "react-router-dom";
import "./style.css";

const options = [<Settings />];

const ITEM_HEIGHT = 48;

class ProfileMenu extends React.Component {
  state = {
    anchorEl: null,
    selected: "Update Header"
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          className="arw-down"
          aria-label="More"
          aria-owns={open ? "long-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}>
          <i className="material-icons">keyboard_arrow_down</i>
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200
            }
          }}>
          {options.map(option => (
            <MenuItem
              containerElement={<Link to="/settings" />}
              key={option}
              selected={option === this.state.selected}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default ProfileMenu;
