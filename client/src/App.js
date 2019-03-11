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

  // search function with the api: artist name. profile picture, top last tracks from the artist

  fetch() {
    console.log(this.state.query);
    var baseURL = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${
      this.state.query
    }&api_key=&format=json`;

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

        var albumURL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=&format=json`;
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
          });
      });
  }

  render() {
    return (
      <div className="text-fluid col-md-12">
        <div className="row">
          <div className="col-md-12 col-md-offset-1">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                className="form-control text-center"
                placeholder="Enter the artist name"
                required
                onChange={event => this.setState({ query: event.target.value })}
                onKeyPress={event => {
                  if (event.key === "Enter") this.fetch();
                }}
              />
            </div>
          </div>
        </div>
        <div className="text-center row">
          <div className="col-md-3 " />
          <div className="col-md-8 ">
            <div className="col-md-2">
              <img
                className="img-responsive"
                src={this.state.profilepic}
                alt=""
              />
            </div>
            <div className="col-md-8">
              <h3 className="lead">{this.state.artist}</h3>
            </div>
          </div>
        </div>

        <div className="row col-md-12">
          <div className="col-md-4" />
          <div className="col-md-4">
            <ul>
              {this.state.tracks.map(function(track, index) {
                return (
                  <li className="tracklist" key={index}>
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
      </div>
    );
  }
}
export default App;
