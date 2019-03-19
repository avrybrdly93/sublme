import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import Slider from "../Slider/Slider";
import "./style.css";

const styles = theme => ({
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  playIcon: {
    height: 38,
    width: 38
  },
  roundedCircle: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginBottom: 80
  }
});

class MusicCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: [],
      active: false
    };
  }

  handleClick = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  render() {
    const { classes, ...other } = this.props;
    return (
      <React.Fragment>
        <Card className="card" {...other} key={this.props.id}>
          <CardMedia
            className="cover"
            image={this.props.cover}
            title={this.props.covername}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <img
                  src={this.props.profile}
                  alt={this.props.alt}
                  className={classes.roundedCircle}
                />
                <Typography variant="body1" className="producer">
                  Produced by {this.props.producer}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className="track-info artist">
                  {this.props.artist}
                </Typography>
                {/* <Slider /> */}
                <Typography variant="h5" className="track-info">
                  {this.props.title.toUpperCase()}
                </Typography>
              </CardContent>
            </div>
            <div className="controls">
              <i className="fas fa-step-backward fa-2x" />
              <i
                onClick={() => {
                  this.handleClick();
                }}
                className={
                  this.state.active
                    ? "far fa-pause-circle fa-3x play-pause-btn"
                    : "far fa-play-circle fa-3x play-pause-btn"
                }
              />
              <i className="fas fa-step-forward fa-2x" />
            </div>
            <div className="social-icons">
              <a href="/">
                <i className="far fa-heart fa-sm" />
              </a>
              <div className="space-1" />
              <a href="/">
                <i className="far fa-comment fa-sm" />
              </a>
            </div>
          </CardMedia>
        </Card>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MusicCard);
