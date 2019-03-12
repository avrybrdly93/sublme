import React, { Component } from "react";
import "./App.css";

// set a constructor for the api

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      artist: null,
      profilepic: null,
      listeners: null,
      playcount: null,
      description: null,
      tracks: [],
      playingUrl: null,
      audio: null,
      playing: false
    };
  }

  // search function with the api: artist name. profile picture,

  fetch() {
    console.log(this.state.query);
    var baseURL = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${
      this.state.query
    }&api_key=b686750a281378159473653159e27252&format=json`;

    console.log(baseURL);
    fetch(baseURL, {
      method: "GET"
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);

        const artist = json.artist["name"];
        this.setState({ artist });
        const profilepic = json.artist.image[2]["#text"];
        this.setState({ profilepic });
        console.log("profilepic:", profilepic);

        var albumURL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=b686750a281378159473653159e27252&format=json`;
        console.log(albumURL);
        fetch(albumURL, {
          method: "GET"
        })
          .then(res => res.json())
          .then(json => {
            console.log(json);
            const tracks = json.toptracks["track"];
            this.setState({ tracks });
            console.log(this.state.tracks);

            var TracksUrl = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=b686750a281378159473653159e27252&format=json`;
            console.log(TracksUrl);
            fetch(TracksUrl, {
              method: "GET"
            })
              .then(res => res.json())
              .then(json => {
                console.log(json);
                const chart = json.tracks["name"];
                this.setState({ chart });
                console.log("name", chart);
              });
          });
      });
  }

  playAudio(previewUrl) {
    let audio = new Audio(previewUrl);
    if (!this.state.playing) {
      audio.play();
      this.setState({
        playing: true,
        playingUrl: previewUrl,
        audio
      });
    } else {
      if (this.state.playingUrl === previewUrl) {
        this.state.audio.pause();
        this.setState({
          playing: false
        });
      } else {
        this.state.audio.pause();
        audio.play();
        this.setState({
          playing: true,
          playingUrl: previewUrl,
          audio
        });
      }
    }
  }
  render() {
    return (
      <div className="text-fluid col-md-12">
        <div className="row">
          <div className="col-md-12 col-md-offset-1">
            <div className="form-group has-feedback">
              <input
                type="text"
                className="form-control"
                // eslint-disable-next-line react/jsx-no-duplicate-props
                className="form-controls text-center"
                placeholder="Enter Any Artist to search"
                required
                onChange={event => this.setState({ query: event.target.value })}
                onKeyPress={event => {
                  if (event.key === "Enter") this.fetch();
                }}
              />
            </div>
          </div>
        </div>
        <div className="text-center Profile row">
          <div className="col-md-3 " />
          <div className="col-md-8 ">
            <div className="col-md-2 lead Artistpic">
              <img
                className="img-responsive"
                src={this.state.profilepic}
                alt=""
              />
            </div>
            <div className="col-md-8 Artistname">
              <h3 className="lead">{this.state.artist}</h3>
              {/* <span className="label label-info">{this.state.listeners}</span> */}
              {/* <span className="label label-primary">
                {this.state.playcount}
              </span> */}
            </div>
          </div>
        </div>
        <div className="row Gallery col-md-12">
          <div className="col-md-4" />
          <div className="col-md-4">
            <ul>
              {this.state.tracks.map(function(track, index) {
                return (
                  <li className="well" key={index}>
                    {" "}
                    <img
                      className="img-responsive imagealbum"
                      src={track.image[0]["#text"]}
                      alt=""
                    />
                    <a href={track.url}>{track.name} </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-2" />
        </div>
        {/* <div classname="row Charts col-md-12 border">
          <ul>
            {this.state.chart.map(function(track, index) {
              return (
                <li className="well" key={index}>
                  {" "}
                  <a href={track.url}>{track.name} </a>
                </li>
              );
            })}
          </ul>
        </div> */}
      </div>
    );
  }
}

export default App;
