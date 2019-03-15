//THIS IS WHERE WE DO API CALLS TO OUR OWN DB!
import axios from "axios";

export default {
  //Post to Login Route
  loginUser: function(tryUser) {
    return axios.post("/api/users/login ",tryUser);
  }
};
