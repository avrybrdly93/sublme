import React from "react";
import SearchBar from "./search-bar";
import youtube from "./youtubeapi";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class Youtube extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };
  handleSubmit = async termFromSearchBar => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar
      }
    });
    this.setState({
      videos: response.data.items
    });
  };
  handleVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1em" }}>
        <SearchBar handleFormSubmit={this.handleSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                handleVideoSelect={this.handleVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Youtube;

// class Youtube extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       resultyt: [],
//       selectedVideo: null
//     };

// this.clicked = this.clicked.bind(this);
// }

// clicked() {
//   console.log(this.state.query);
//   var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelID=${channelID}&part=snippet,id&order=date&maxResults=${result}`;
//   console.log(finalURL);
//   fetch(finalURL, {
//     method: "GET"
//   })
//     .then(res => res.json())
//     .then(json => {
//       console.log(json);
//       var resultyt = json.items.map(
//         obj => "https://www.youtube.com/embed/" + obj.id.videoId
//       );
//       this.setState({ resultyt });
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

//   render() {
//     // console.log(this.state.resultyt);
//     return (
//       <div class="container">
//         <div>
//           <SearchBar />
//         </div>

//         {/* <div>
//           <button onClick={this.clicked}>Get youtube videos</button>
//         </div> */}
//         <div id="layout-content" className="layout-content-wrapper">
//           <div className="panel-list">
//             {this.state.resultyt.map((link, i) => {
//               console.log(link);
//               var frame = (
//                 <div key={i} className="youtube">
//                   <iframe
//                     title="video"
//                     width="560"
//                     height="315"
//                     src={link}
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   />
//                 </div>
//               );

//               return frame;
//             })}
//           </div>
//         </div>
//         {this.frame}
//       </div>
//     );
//   }
// }

// export default Youtube;
