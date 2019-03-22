//THIS IS WHERE WE DO API CALLS TO OUR OWN DB!
import axios from "axios";
let hasBeenLiked = false;
export default {
  //Post to Login Route
  loginUser: function(tryUser) {
    return axios.post("/api/users/login ", tryUser);
  },

  like: (like, songID, username) => {
    axios
      .put("/api/music/" + songID, {
        likes: like
      })
      .then(response => {});
    axios
      .put("/api/users/likedMusic/" + username, {
        likedMusic: songID
      })
      .then(response => {
        //hasBeenLiked = false;
        console.log("First time liked!");
        //console.log(response.data, this.props.songid);
      });
  },
  unlike: (like, songID, username) => {
    axios
      .put("/api/music/" + songID, {
        likes: like
      })
      .then(response => {});
    axios
      .put("/api/users/likedMusic/remove/" + username, {
        likedMusic: songID
      })
      .then(response => {
        console.log("removing like");
        //hasBeenLiked = true;
      });
  },
  getMusic: (songID, callback) => {
    axios.get("/api/music/" + songID).then(callback);
  },
  getLikes: (userID, callback) => {
    axios.get("api/users/likedMusic/" + userID).then(callback);
  },
  getComments: (songID, callback) => {
    axios.get("/api/music/comments/" + songID).then(callback);
  },
  findUser: function(userID) {
    return axios.get("/api/users/" + userID);
  },
  passportFindUser: function(){
    return axios.get("/api/users/find/self");
  },
  createUser: function(newUser) {
    return axios.post("/api/users/signup", newUser);
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
