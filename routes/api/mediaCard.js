const router = require("express").Router();
const music = require("../../models/Music");

router.get("/api/likes", (req, res) => {
  console.log(music.likes);
  console.log("HELLOOO");
  res.send("HELLOO");
});
