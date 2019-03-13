import React from "react";
import MediaControlCard from "../MediaControlCard/MediaControlCard";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";
import Songs from '../../Songs.json'

const GridList = () => {
  return (
    <div className="col-12">
      <div data-uk-slider>
        <div class="uk-position-relative">
          <div class="uk-slider-container uk-light">
            <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
              <li>
                <MediaControlCard />
              </li>
              <li>
                <MediaControlCard />
              </li>
              <li>
                <MediaControlCard cover={Songs.cover}/>
              </li>
              <li>
                <MediaControlCard />
              </li>
              <li>
                <MediaControlCard />
              </li>
            </ul>
            <a
              className="uk-position-center-left uk-position-small uk-hidden-hover"
              href="/"
              data-uk-slidenav-previous
              data-uk-slider-item="previous">
              <i class="fas fa-arrow-left" />
            </a>
            <a
              className="uk-position-center-right uk-position-small uk-hidden-hover"
              href="/"
              data-uk-slidenav-next
              data-uk-slider-item="next">
              <i class="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridList;
