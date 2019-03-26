//THIS IS WHERE WE DO API CALLS TO OUR OWN DB!
import axios from "axios";
let hasBeenLiked = false;
export default {
  //Post to Login Route
  loginUser: function(tryUser) {
    return axios.post("/api/users/login ", tryUser);
  },

  likeSong: (like, ID, username, likeRoute, userRoute) => {
    axios
      .put(likeRoute + ID, {
        likes: like
      })
      .then(response => {
        console.log(ID);
      });
    axios
      .put(userRoute + username, {
        likedMusic: ID
      })
      .then(response => {});
  },
  likeComment: (like, ID, username, likeRoute, userRoute) => {
    axios
      .put(likeRoute + ID, {
        likes: like
      })
      .then(response => {
        console.log(ID);
      });
    axios
      .put(userRoute + username, {
        likedComment: ID
      })
      .then(response => {});
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
  getCommentLikes: (commentID, callback) => {
    axios.get("api/music/comments/likes/" + commentID).then(callback);
  },
  getUserCommentLikes: (username, callback) => {
    axios.get("api/users/likedComments/" + username).then(callback);
  },
  getArtists: callback => {
    axios.get("/api/users/user/artists").then(callback);
  },
  findUser: function(userID) {
    return axios.get("/api/users/" + userID);
  },
  passportFindUser: function() {
    return axios.get("/api/users/find/self");
  },
  createUser: function(newUser) {
    return axios.post("/api/users/signup", newUser);
  }
};
