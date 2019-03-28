import React, { Component } from "react";
import Video from "../components/Videos/Videos";
import Bullhorn from "../components/Bullhorn/Bullhorn";
import MusicCard from "../components/MusicCard/MusicCard";
import BullhornButton from "../components/BullhornButton/BullhornButton";
import Videos from "../Videos.json";
import Bullhorns from "../Bullhorns.json";
import Songs from "../Songs.json";

class Explore extends Component {
  state = {
    videos: Videos,
    bullhorns: Bullhorns,
    songs: Songs
  };

  render() {
    let videos = this.state.videos;
    let bullhorns = this.state.bullhorns;
    let songs = this.state.songs;

    let items = [<Video />, <Bullhorn />, <MusicCard />];

    // TO DO's:
    // .map for ExploreVideos, Bullhorns, MusicCards...
    // const renderVideos = videos.map(video => (
    //   <li key={video.id}>
    //     <Video video={video.video} title={video.title} />
    //   </li>
    // ));

    // const renderBullhorns = bullhorns.map(bullhorn => (
    //   <li key={bullhorn._id}>
    //     <Bullhorn
    //       profile={bullhorn.profile}
    //       username={bullhorn.username}
    //       content={bullhorn.content}
    //       follow={bullhorn.follow}
    //       timestamp={bullhorn.timestamp}
    //     />
    //   </li>
    // ));

    // const renderSongs = songs.map(song => (
    //   <li key={song._id}>
    //     <MusicCard
    //       songid={song._id}
    //       cover={song.cover}
    //       // covername={song.artist}
    //       profile={song.profilePic}
    //       musicSrc={song.musicSrc}
    //       producer={song.producer}
    //       artist={song.artist}
    //       title={song.title}
    //       onClick={e => this.handleCardClick(e, song)}
    //     />
    //   </li>
    // ));

    // make exploreItems array that holds each mapped object... ex. var exploreItems = [renderVideos, renderBullhorns, renderSounds]
    let exploreItems = [
      items.map(
        (song, bullhorn, video) => (
          (
            <li key={song._id}>
              <MusicCard
                songid={song._id}
                cover={song.cover}
                // covername={song.artist}
                profile={song.profilePic}
                musicSrc={song.musicSrc}
                producer={song.producer}
                artist={song.artist}
                title={song.title}
                onClick={e => this.handleCardClick(e, song)}
              />
            </li>
          ),
          (
            <li key={bullhorn._id}>
              <Bullhorn
                profile={bullhorn.profile}
                username={bullhorn.username}
                content={bullhorn.content}
                follow={bullhorn.follow}
                timestamp={bullhorn.timestamp}
              />
            </li>
          ),
          (
            <li key={video.id}>
              <Video video={video.video} title={video.title} />
            </li>
          )
        )
      )
    ];
    // filter exploreItems to perform a Math.random to render objects inside array to random places...
    var renderExplore = exploreItems.filter(
      explore => explore[Math.floor(Math.random() * 18)]
    );

    // renderExploreItems to grid

    // lastly create bullhorn button to compose new bullhorn, add to bullhorns, and append to grid
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">{renderExplore}</div>
        </div>
        <div className="row">
          <div className="col-11" />
          <div className="col-1">
            <BullhornButton />
          </div>
        </div>
      </div>
    );
  }
}

export default Explore;
