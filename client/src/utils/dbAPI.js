//THIS IS WHERE WE DO API CALLS TO OUR OWN DB!
import axios from "axios";

export default {
  //Post to Login Route
  loginUser: function(tryUser) {
    return axios.post("/api/users/login ", tryUser);
  },
  sendLike: (like, songID, userID) => {
    axios
      .put("/api/music/" + songID, {
        likes: like
      })
      .then(response => {});
    // axios
    //   .put("/api/users/likedMusic/" + userID, {
    //     likedMusic: songID
    //   })
    //   .then(response => {
    //     console.log(response.data, this.props.songid);
    //   });
  },
  getMusic: (songID, callback) => {
    axios.get("/api/music/" + songID).then(callback);
  },
  getComments: (songID, callback) => {
    axios.get("/api/music/comments/" + songID).then(callback);
  }
  // sendComment: (songID, newComment, callback) => {
  //   axios
  //     .put("/api/music/comments/" + songID, {
  //       comments: newComment
  //     })
  //     .then(callback);
  // }
};

// axios.get("/api/music/comments/" + this.props.songid).then(response => {
//   response.data.map(comment => {});
//   this.setState({ comments: response.data, newComment: "" });
