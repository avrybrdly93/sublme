const router = require("express").Router();
const messageController=require("../../controllers/messageController");


router.route("/").get(messageController.messageHistory);

module.exports=router;