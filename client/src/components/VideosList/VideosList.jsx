import React, { Component } from "react";
import Videos from "../Videos/Videos";
import VideoList from "../../Videos.json";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";
import "./style.css";

class VideosList extends Component {
  state = {
    videos: VideoList
  };
  render() {
    let videos = this.state.videos;
    var renderVideos = videos.map(videos => (
      <li key={videos.id}>
        <Videos video={videos.video} title={videos.title} data-uk-cover />
      </li>
    ));
    return (
      <React.Fragment>
        <div data-uk-slideshow="animation: slide">
          <div
            className="uk-position-relative uk-visible-toggle uk-light"
            tabIndex="-1">
            <ul className="uk-slideshow-items">{renderVideos}</ul>
            <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default VideosList;