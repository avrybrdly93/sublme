import axios from "axios";
const KEY = "AIzaSyCqycLi0IMkNUxM22JkPwdLTmHsbT7-nRI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
