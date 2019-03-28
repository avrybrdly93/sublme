import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import MusicCard from "../components/MusicCard/MusicCard";
import ResultsProfileGridlist from "../components/ResultsProfileGridlist/ResultsProfileGridlist";
import ReactMediaVisualizer from "react-media-visualizer";
import axios from "axios";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";

class Results extends Component {
  state = {
    searchQuery: "trap",
    result: {},
    currentSong: {},
    active: false,
    playlist: []
  };

  // TO DO'S:
  // Create function that checks database and renders results for songs & artists/producers matching the searchQuery
  componentDidMount() {
    axios.get("/api/music").then(results => {
      this.setState({ result: results.data });
    });
  }

  handleCardClick = (e, result) => {
    e.preventDefault();
    this.setState({ currentSong: result });
    console.log(result);
  };

  render() {
    let results = this.state.result;
    let currentSong = this.state.currentSong;

    // var renderResults = results.map(result => (
    //   <li key={result._id}>
    //     <Sounds
    //       songid={result._id}
    //       cover={result.cover}
    //       // covername={song.artist}
    //       profile={result.profilePic}
    //       musicSrc={result.musicSrc}
    //       producer={result.producer}
    //       artist={result.artist}
    //       title={result.title}
    //       onClick={e => this.handleCardClick(e, result)}
    //     />
    //   </li>
    // ));
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2" />
            <div className="col-8">
              <Typography
                component="h2"
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "250%",
                  fontWeight: 100
                }}>
                Results for {this.state.searchQuery}...
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
                }}>
                Swipe thru the results!
              </Typography>
            </div>
            <div className="col-2" />
          </div>
          <br />
          <div className="row">
            <div className="col-1" />
            <div className="col-10">
              <div data-uk-slider>
                <ul className="uk-slider-items uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-3@l uk-grid-small">
                  {/* {renderResults} */}
                  <li>
                    <MusicCard
                      songid="0"
                      cover="https://media2.fdncms.com/metrotimes/imager/u/original/12866616/30705662_10156360310319661_3257475992410652672_o.jpg"
                      profile="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQ3Mzg3MjY0ODg2OTA4NTk5/j_cole_photo_by_isaac_brekken_wireimage_getty_503069628.jpg"
                      producer="J. Cole"
                      artist="J. Cole"
                      title="Window Pain (Outro)"
                      musicSrc=""
                    />
                  </li>
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
            <div className="col-1" />
          </div>
          <br />
          <div className="row">
            <div className="col-1" />
            <div className="col-10">
              <Typography
                component="h2"
                variant="headline"
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "100%",
                  fontWeight: 100,
                  paddingBottom: 10
                }}>
                Artists & Producers
              </Typography>
              <ResultsProfileGridlist />
              <br />
            </div>
            <div className="col-1" />
          </div>
        </div>
        <div className="musicPlayer">
          <ReactMediaVisualizer
            playlist={this.state.songs}
            receiveStateUpdates={() => {
              this.receiveStateUpdates();
            }}
            theme={this.state.theme}
            playlistIsPlaying={this.state.playlistIsPlaying}
            currentSongIndex={this.state.currentSongIndex}
            showVisualizerToggle={false}
            showPlaylistToggle={false}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Results;
