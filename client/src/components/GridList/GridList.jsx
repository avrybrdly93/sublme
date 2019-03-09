import React from "react";
import MediaControlCard from "../MediaControlCard/MediaControlCard";

const GridList = () => {
  return (
    <div
      class="uk-position-relative uk-visible-toggle uk-light"
      tabindex="-1"
      uk-slider>
      <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
        <li>
          <div class="uk-panel">
            <MediaControlCard />
          </div>
        </li>
        <li>
          <div class="uk-panel">
            <MediaControlCard />
          </div>
        </li>
        <li>
          <div class="uk-panel">
            <MediaControlCard />
          </div>
        </li>
        <li>
          <div class="uk-panel">
            <MediaControlCard />
          </div>
        </li>
        <li>
          <div class="uk-panel">
            <MediaControlCard />
          </div>
        </li>
      </ul>

      <a
        class="uk-position-center-left uk-position-small uk-hidden-hover"
        href="/"
        uk-slidenav-previous
        uk-slider-item="previous">
        test
      </a>
      <a
        class="uk-position-center-right uk-position-small uk-hidden-hover"
        href="/"
        uk-slidenav-next
        uk-slider-item="next">
        >
      </a>
    </div>
  );
};

export default GridList;
