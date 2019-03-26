import React, { Component } from "react";
import ReactMediaVisualizer from "react-media-visualizer";
import "./style.css";

class MediaPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      playlistIsPlaying: false,
      currentSongIndex: 0,
      theme: "spotify"
    };
  }

  render() {
    return (
      <div className="mediaPlayer">
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
    );
  }
  receiveStateUpdates(payload) {
    this.setState(payload);
  }
}

export default MediaPlayer;
