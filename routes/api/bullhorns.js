const router = require("express").Router();
const bullhornController=require("../../controllers/bullhornController");


router.route("/").get(bullhornController.findAll);

module.exports=router;