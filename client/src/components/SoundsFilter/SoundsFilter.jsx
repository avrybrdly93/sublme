import React, { Component } from "react";
import SoundCard from "../SoundCard/SoundCard";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";
import SoundsArr from "../../Songs.json";

class SoundsFilter extends Component {
  state = {
    sounds: SoundsArr
  };
  render() {
    let sounds = this.state.sounds;
    console.log(sounds);
    const renderSounds = sounds.map(sound => (
      <li data-color={sound.category} key={sound.id}>
        <SoundCard
          songid={sound.id}
          cover={sound.cover}
          profile={sound.profilePic}
          artist={sound.artist}
          title={sound.title}
          mp3={sound.musicSrc}
        />
      </li>
    ));
    return (
      <div data-uk-filter="target: .js-filter">
        <ul className="uk-subnav uk-subnav-pill">
          <li className="uk-active" data-uk-filter-control>
            <a href="/">All</a>
          </li>
          <li data-uk-filter-control="[data-color='Hot']">
            <a href="/">Hot</a>
          </li>
          <li data-uk-filter-control="[data-color='New']">
            <a href="/">New</a>
          </li>
          <li data-uk-filter-control="[data-color='Loved']">
            <a href="/">Loved</a>
          </li>
        </ul>

        <ul
          className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center"
          data-uk-grid>
          {renderSounds}
        </ul>
      </div>
    );
  }
}

export default SoundsFilter;
