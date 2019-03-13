import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Songs from "../../Songs.json";

const styles = theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  }
});

class MediaControlCard extends Component {
  state = {
    songs: Songs
  };

  render() {
    const { classes, theme } = this.props;

    let songs = this.state.songs;
    // const cards = songs.map(songs => (

    // ));
    return <React.Fragment />;
  }
}

export default withStyles(styles, { withTheme: true })(MediaControlCard);
