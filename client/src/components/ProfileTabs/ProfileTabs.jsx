import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import SoundsFilter from "../SoundsFilter/SoundsFilter";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

class ProfileTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, theme } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{
            background: "linear-gradient(to right,#f27121,#e94057,#8a2387)"
          }}>
          <Tabs value={value} onChange={this.handleChange} centered>
            <Tab label="Bio" />
            <Tab label="Sounds" />
            <Tab label="Favorites" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer style={{ height: "100%" }} dir={theme.direction}>
            <div className="content">
              <Typography
                gutterBottom
                variant="caption"
                component="h2"
                style={{
                  textAlign: "center",
                  color: "black",
                  fontWeight: 500
                }}>
                {this.props.location}
              </Typography>
              <Typography
                component="p"
                style={{
                  margin: "0 auto",
                  textAlign: "center",
                  color: "black",
                  fontWeight: 50
                }}>
                {this.props.bio}
              </Typography>
            </div>
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <SoundsFilter />
          </TabContainer>
        )}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
      </div>
    );
  }
}

ProfileTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ProfileTabs);
