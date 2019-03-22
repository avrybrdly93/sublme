const router = require("express").Router();
const userController = require("../../controllers/userController");

// => /api/users/signup
router.route("/signup").post(userController.signUpUser);

// => /api/users/login
router.route("/login").post(userController.loginUser);

// => /api/users/likedMusic/:username
router.route("/likedMusic/:username").put(userController.likeSong);

// => /api/users/:id
router.route("/:id").get(userController.findUserByID);

// => /api/users/likedMusic/:username
router.route("/likedMusic/:username").get(userController.findUserByUsername);

// => /api/likedMusic/:username
router.route("/likedMusic/remove/:username").put(userController.deleteLike);

// => /api/users/
router.route("/").get(userController.findAll);

// => /api/users/logout
router.route("/logout").get(userController.logoutUser);

// => /api/users/find/self
router.route("/find/self").get(userController.findLoggedInUser);

module.exports = router;
