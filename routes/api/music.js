const router = require("express").Router();
const musicController = require("../../controllers/musicController");

// => /api/music/
router.route("/").post(musicController.create);

// => /api/music/new
router.route("/new").post(musicController.create);

// => /api/music/
router.route("/").get(musicController.findAll);

// => /api/music/own
router.route("/own").get(musicController.findOwnMusic);

// => /api/music/genre/:genre
router.route("/genre/:genre").get(musicController.findByGenre);

// => /api/music/:id
router.route("/:id").get(musicController.findByArtistId);

// => /api/music/search/:term
router.route("/search/:term").get(musicController.findBySearch);

// => /api/music/:id
router.route("/:id").put(musicController.update);

// => /api/music/comments/:id
router.route("/comments/:id").put(musicController.postComment);

// => /api/music/comments/replies/:id
router.route("/comments/replies/:id").get(musicController.getReplies);

// => /api/music/comments/replies/:id
router.route("/comments/replies/:id").put(musicController.postReply);

// => /api/music/comments/likes/:id
router.route("/comments/likes/:id").put(musicController.updateComments);

// => /api/music/comments/likes/:id
router.route("/comments/likes/:id").get(musicController.getCommentLikes);

// => /api/music/comments/:id
router.route("/comments/:id").get(musicController.findComments);

module.exports = router;
