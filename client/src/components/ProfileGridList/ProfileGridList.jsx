import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";

const ProfileGridList = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          tabIndex="-1"
          data-uk-slider="sets: true">
          <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid-small">
            <ProfileCard />
          </ul>

          <a
            className="uk-position-center-left uk-position-small"
            href="/"
            data-uk-slidenav-previous
            data-uk-slider-item="previous">
            <i class="material-icons md-48">keyboard_arrow_left</i>
          </a>
          <a
            className="uk-position-center-right uk-position-small"
            href="/"
            data-uk-slidenav-next
            data-uk-slider-item="next">
            <i class="material-icons md-48">keyboard_arrow_right</i>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileGridList;