import React, { Component } from "react";
import ReactMediaVisualizer from "react-media-visualizer";
import axios from "axios";
import "./style.css";

class MediaPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      playlistIsPlaying: false,
      currentSongIndex: 0,
      theme: "spotify",
      songs: [],
      currentSong: props.currentSong,
      active: false
    };
  }

  componentDidMount() {
    axios.get("/api/music").then(results => {
      this.setState({ songs: results.data });
      console.log(this.state.songs);
    });
  }

  render() {
    return (
      <div className="mediaPlayer">
        <ReactMediaVisualizer
          playlist={this.props.songs}
          receiveStateUpdates={() => {
            this.receiveStateUpdates();
          }}
          theme={this.props.theme}
          playlistIsPlaying={this.props.playlistIsPlaying}
          currentSongIndex={this.props.currentSongIndex}
          currentSong={this.props.currentSong}
          howVisualizerToggle={false}
          showPlaylistToggle={false}
        />
      </div>
    );
  }
  receiveStateUpdates(payload) {
    this.setState(payload);
  }
}

export default MediaPlayer;
