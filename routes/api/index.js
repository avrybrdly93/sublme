const router = require("express").Router();
const userRoutes = require("./users");
const musicRoutes = require("./music");


//Routes, these follow /api/ term below, (DO NOT TOUCH)
router.use("/users", userRoutes);
router.use("/music",musicRoutes);
router.use("/bullhorns",bullhornRoutes);
router.use("/messages",messageController);

module.exports = router;