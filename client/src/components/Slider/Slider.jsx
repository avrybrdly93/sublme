import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/lab/Slider";

const styles = {
  root: {
    width: 300
  },
  slider: {
    padding: "22px 0px"
  }
};

// function pad(n, width, z = 0) {
//   n = n + "";
//   return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
// }

// const minutesAndSeconds = position => [
//   pad(Math.floor(position / 60), 2),
//   pad(position % 60, 2)
// ];

class SimpleSlider extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    // const elapsed = minutesAndSeconds(currentPosition);
    // const remaining = minutesAndSeconds(trackLength - currentPosition);

    return (
      <div className={classes.root}>
        {/* <View style={styles.container}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>{elapsed[0] + ":" + elapsed[1]}</Text>
            <View style={{ flex: 1 }} />
            <Text style={[styles.text, { width: 40 }]}>
              {trackLength > 1 && "-" + remaining[0] + ":" + remaining[1]}
            </Text>
          </View>
          <Slider
            maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
            onSlidingStart={onSlidingStart}
            onSlidingComplete={onSeek}
            value={currentPosition}
            style={styles.slider}
            minimumTrackTintColor="#fff"
            maximumTrackTintColor="rgba(255, 255, 255, 0.14)"
            thumbStyle={styles.thumb}
            trackStyle={styles.track}
          />
        </View> */}
        <Slider
          classes={{ container: classes.slider }}
          value={value}
          aria-labelledby="label"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

SimpleSlider.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSlider);
