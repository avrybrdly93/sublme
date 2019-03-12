import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";

const ProfileGridList = () => {
  return (
    <React.Fragment>
      <div className="col-12">
        <div data-uk-slider>
          <div className="uk-position-relative">
            <div className="uk-slider-container uk-light">
              <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
                <ProfileCard />
              </ul>
              <a
                className="uk-position-center-left uk-position-small uk-hidden-hover"
                href="/"
                data-uk-slidenav-previous
                data-uk-slider-item="previous">
                <i className="fas fa-arrow-left" />
              </a>
              <a
                className="uk-position-center-right uk-position-small uk-hidden-hover"
                href="/"
                data-uk-slidenav-next
                data-uk-slider-item="next">
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileGridList;
