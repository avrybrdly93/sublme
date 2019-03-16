//THIS IS WHERE WE DO API CALLS TO OUR OWN DB!
import axios from "axios";

export default {
  //Post to Login Route
  loginUser: function(tryUser) {
    return axios.post("/api/users/login",tryUser);
  },
  createMusic: function(newMusic){
    return axios.post("/api/music/new",newMusic, {headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  }
};