import React from "react";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";

function Videos(props) {
  return (
    <iframe
      key={props.id}
      src={props.video}
      title={props.title}
      width="100%"
      height="100%"
      frameBorder="0"
      allowFullScreen
      data-uk-responsive
      data-uk-video="autoplay: false; automute: false"
      data-uk-cover
    />
  );
}

export default Videos;
