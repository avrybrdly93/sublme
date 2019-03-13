import React, { Component } from "react";
import ReactMediaVisualizer from "react-media-visualizer";

const style = {
  sticky: {
    position: "sticky",
    top: 0
  }
};

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
      <div className={style.sticky}>
        <div className="content" />
        <ReactMediaVisualizer
          playlist={this.state.playlist}
          receiveStateUpdates={this.receiveStateUpdates}
          playlistIsPlaying={this.state.playlistIsPlaying}
          theme={this.state.theme}
          currentSongIndex={this.state.currentSongIndex}
          style={{ opacity: 0.5 }}
        />
      </div>
    );
  }
}

export default MediaPlayer;
