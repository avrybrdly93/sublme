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
      width="1280"
      height="720"
      frameBorder="0"
      allowFullScreen
      data-uk-responsive
      data-uk-video="autoplay: true; automute: true"
    />
  );
}

export default Videos;
