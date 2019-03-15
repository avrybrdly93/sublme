//DO NOT TOUCH THIS PAGE !!!!
const router = require("express").Router();
const userRoutes = require("./users");
const musicRoutes = require("./music");
const bullhornRoutes = require("./bullhorns");
const messageRoutes = require("./messages");
const userSearch = require("./userSearch");

//Routes, these follow after /api
router.use("/users", userRoutes);
router.use("/music",musicRoutes);
router.use("/bullhorns",bullhornRoutes);
router.use("/messages",messageRoutes);

module.exports = router;