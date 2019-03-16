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

<<<<<<< HEAD
<<<<<<< HEAD
module.exports=router;
 
=======
module.exports=router;
>>>>>>> javier-branch
=======
router.route("/api/music").put(musicController.update);

module.exports = router;
>>>>>>> 72ec3543225158b98c45d5bb8b2d42f2f723a304
