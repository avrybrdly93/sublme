const router = require("express").Router();
const userController=require("../../controllers/userController");

// => /api/users/signup
router.route("/signup").post(userController.signUpUser);
// => /api/users/login
router.route("/login").post(userController.loginUser);

module.exports=router;