const router = require("express").Router();
const userController = require("../../controllers/userController");

// => /api/users/signup
router.route("/signup").post(userController.signUpUser);

// => /api/users/login
router.route("/login").post(userController.loginUser);

// => /api/users/musicLiked/:id
router.route("/likedMusic/:id").put(userController.likeSong);

// => /api/users/:id
router.route("/:id").get(userController.findUserByID);

// => /api/users/logout
router.route("/logout").get(userController.logoutUser);

// => /api/users/find/self
router.route("/find/self").get(userController.findLoggedInUser);

module.exports = router;
