const router = require("express").Router();
const search =require("../models/Search");

router.route("/search").post(userController.signUpUser);



module.exports=router;