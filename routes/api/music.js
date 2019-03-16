const router = require("express").Router();
const musicController = require("../../controllers/musicController");

// => /api/music/
router.route("/").get(musicController.findAll);

// => /api/music/own
router.route("/own").get(musicController.findOwnMusic);

// => /api/music/genre/:genre
router.route("/genre/:genre").get(musicController.findByGenre);

// => /api/music/:id
router.route("/:id").get(musicController.findByArtistId);

// => /api/music/
router.route("/").post(musicController.create);

// => /api/music/:id
router.route("/:id").put(musicController.update);

module.exports = router;
