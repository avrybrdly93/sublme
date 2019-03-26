import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./style.css";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  roundedCircle: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginBottom: 80
  }
};

function Bullhorn(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.pos} color="textSecondary">
          {props.timestamp}
        </Typography>
        <img
          src={props.profile}
          alt={props.alt}
          className={classes.roundedCircle}
        />
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom>
          {props.username}
        </Typography>
        <Typography component="p">{props.content}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          className={classes.button}
          //   onClick={this.props.Settings}
          style={{
            fontWeight: 50,
            borderColor: "white",
            color: "white"
          }}
          href={props.follow}>
          Follow
        </Button>
      </CardActions>
    </Card>
  );
}

Bullhorn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Bullhorn);
