import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import ProfileGridList from "../components/ProfileGridList/ProfileGridList";
import VideosList from "../components/VideosList/VideosList";
import MediaPlayer from "../components/MediaPlayer/MediaPlayer";
import MusicCard from "../components/MusicCard/MusicCard";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";
import "./dashboard.css";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      currentSong: {},
      active: false,
      playlist: [],
      playlistIsPlaying: false,
      currentSongIndex: 0,
      theme: "spotify"
    };
    // this.receiveStateUpdates = this.receiveStateUpdates.bind(this);
  }

  componentDidMount() {
    axios.get("/api/music").then(results => {
      this.setState({ songs: results.data });
    });
  }

  handleCardClick = (e, song) => {
    e.preventDefault();
    this.setState({ currentSong: song });
    console.log(song);
  };

  render() {
    let songs = this.state.songs;
    // let currentSong = this.state.currentSong;

    var renderCards = songs.map(song => (
      <li key={song._id}>
        <MusicCard
          songid={song._id}
          cover={song.cover}
          // covername={song.artist}
          profile={song.profilePic}
          filelink={song.fileLink}
          producer={song.producer}
          artist={song.artist}
          title={song.title}
          onClick={e => this.handleCardClick(e, song)}
        />
      </li>
    ));
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Typography
                component="h2"
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "250%",
                  fontWeight: 100
                }}>
                More of what you want...
              </Typography>
              <Typography
                component="h2"
                variant="headline"
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "100%",
                  fontWeight: 100,
                  paddingBottom: 10
                }}
                gutterBottom>
                Swipe thru the most popular tracks out now!
              </Typography>
            </div>
          </div>
          <div className="row">
            <div className="col-1" />
            <div className="col-10">
              <div data-uk-slider>
                <ul className="uk-slider-items uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-3@l uk-grid-small">
                  {renderCards}
                </ul>
                <a
                  className="uk-position-center-left-out uk-position-small uk-hidden-hover"
                  href="/"
                  data-uk-slidenav-previous
                  data-uk-slider-item="previous">
                  <i className="material-icons md-48">keyboard_arrow_left</i>
                </a>
                <a
                  className="uk-position-center-right-out uk-position-small uk-hidden-hover"
                  href="/"
                  data-uk-slidenav-next
                  data-uk-slider-item="next">
                  <i className="material-icons md-48">keyboard_arrow_right</i>
                </a>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12">
              <Typography
                component="h2"
                variant="display4"
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "100%",
                  fontWeight: 100,
                  paddingBottom: 10
                }}
                gutterBottom>
                Upcoming Artists & Producers
              </Typography>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ProfileGridList />
            </div>
          </div>
          <br /> <br />
          <div className="row">
            <div className="col-xl-0 col-sm-0" />
            <div className="col-xl-12 col-sm-12">
              <VideosList />
              <br />
              <br />
              <br />
            </div>
            <div className="col-xl-0 col-sm-0" />
          </div>
        </div>
      </React.Fragment>
    );
  }
  receiveStateUpdates(payload) {
    this.setState(payload);
  }
}

export default Dashboard;
