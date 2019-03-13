const router = require("express").Router();
const musicController=require("../../controllers/musicController");

router.route("/").get(musicController.findAll);

module.exports=router;