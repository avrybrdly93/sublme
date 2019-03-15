import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import axios from "axios";

const styles = theme => ({
  card: {
    display: "flex",
    width: 300
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
  constructor(props) {
    super(props);
    // const { classes, theme } = props;

    //   this.state = {
    //     likes: 0,
    //     comments: null
    //   };
  }

  // componentDidMount() {
  //   axios
  //     .get("/api/likes")
  //     .then(res => res.json())
  //     .then(
  //       result => {
  //         this.setState({
  //           likes: 2
  //         });
  //         console.log(result);
  //       },
  //       error => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     );
  // }

  // likeSong() {
  //   console.log("liked")
  // }

  render() {
    return (
      <Card className={this.props.classes.card}>
        <div className={this.props.classes.details}>
          {/* <div>
            <button onClick={likeSong}>Like - {this.state.likes}</button>
            <button>Comment</button>
          </div> */}
          <CardContent className={this.props.classes.content}>
            <Typography component="h5" variant="h5" style={{ color: "black" }}>
              Temptation
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              style={{ color: "black" }}
            >
              Future
            </Typography>
            <div className={this.props.classes.controls}>
              <IconButton aria-label="Previous">
                {/* {this.theme.direction === "rtl" ? (
                  <SkipNextIcon />
                ) : (
                  <SkipPreviousIcon />
                )} */}
              </IconButton>
              <IconButton aria-label="Play/pause">
                <PlayArrowIcon className={this.props.classes.playIcon} />
              </IconButton>
              <IconButton aria-label="Next">
                {/* {this.theme.direction === "rtl" ? (
                  <SkipPreviousIcon />
                ) : (
                  <SkipNextIcon />
                )} */}
              </IconButton>
            </div>
            <CardMedia
              className={this.props.classes.cover}
              image="https://thefader-res.cloudinary.com/private_images/w_640,c_limit,f_auto,q_auto:eco/future-the-wizrd-cover-680x680_uamq6x/future-new-album-documentary-the-wizrd-cover-art.jpg"
              title="The Wizrd cover"
            />
          </CardContent>
        </div>
      </Card>
    );
  }
}

// function MediaControlCard(props) {
//   const { classes, theme } = props;

//   return (
//     <Card className={classes.card}>
//       <div className={classes.details}>
//         <CardContent className={classes.content}>
//           <Typography component="h5" variant="h5" style={{ color: "black" }}>
//             Temptation
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             color="textSecondary"
//             style={{ color: "black" }}
//           >
//             Future
//           </Typography>
//           <div className={classes.controls}>
//             <IconButton aria-label="Previous">
//               {theme.direction === "rtl" ? (
//                 <SkipNextIcon />
//               ) : (
//                 <SkipPreviousIcon />
//               )}
//             </IconButton>
//             <IconButton aria-label="Play/pause">
//               <PlayArrowIcon className={classes.playIcon} />
//             </IconButton>
//             <IconButton aria-label="Next">
//               {theme.direction === "rtl" ? (
//                 <SkipPreviousIcon />
//               ) : (
//                 <SkipNextIcon />
//               )}
//             </IconButton>
//           </div>
//           <CardMedia
//             className={classes.cover}
//             image="https://thefader-res.cloudinary.com/private_images/w_640,c_limit,f_auto,q_auto:eco/future-the-wizrd-cover-680x680_uamq6x/future-new-album-documentary-the-wizrd-cover-art.jpg"
//             title="The Wizrd cover"
//           />
//         </CardContent>
//       </div>
//     </Card>
//   );
// }

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);

//export default MediaControlCard;
