import React, { Component } from "react";
import "./style.scss";

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    console.log("Hello world :)");
  }
  state = {
    isPlaying: false,
    currentSong: this.props
  };

  render() {
    return (
      <React.Fragment>
        <div className="player">
          <div className="left">
            <img src={this.props.cover} alt={this.props.alt} />
          </div>
          <div className="right">
            <div className="top">
              <a className="artist" href={this.props.profile}>
                {this.props.artist}
              </a>
              <a className="song" href={this.props.songLink}>
                {this.props.title}
              </a>
            </div>
            <div className="bottom">
              <video
                controls
                autoPlay
                name="media"
                key={this.props.id}
                controlsList="nodownload">
                <source src={this.props.src} type="audio/mpeg" />
              </video>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MusicPlayer;
