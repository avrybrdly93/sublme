import React, { Component } from "react";
import "./profile.css";

const API = "AIzaSyCqycLi0IMkNUxM22JkPwdLTmHsbT7-nRI";
const channelID = "UChNB35QmqX81vSbDXDR3i4w";
const result = 5;

class Youtube extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultyt: []
    };
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    console.log(this.state.query);
    var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelID=${channelID}&part=snippet,id&order=date&maxResults=${result}`;
    console.log(finalURL);
    fetch(finalURL, {
      method: "GET"
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        var resultyt = json.items.map(
          obj => "https://www.youtube.com/embed/" + obj.id.videoId
        );
        this.setState({ resultyt });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    console.log(this.state.resultyt);
    return (
      <div class="container">
        <div>
          <button onClick={this.clicked}>Get youtube videos</button>
        </div>
        <div id="layout-content" className="layout-content-wrapper">
          <div className="panel-list">
            {this.state.resultyt.map((link, i) => {
              console.log(link);
              var frame = (
                <div key={i} className="youtube">
                  <iframe
                    title="video"
                    width="560"
                    height="315"
                    src={link}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              );

              return frame;
            })}
          </div>
        </div>
        {this.frame}
      </div>
    );
  }
}

export default Youtube;
