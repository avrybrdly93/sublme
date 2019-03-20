//DO NOT TOUCH THIS PAGE!!!!!!
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes, everything inside api folder follow /api
router.use("/api", apiRoutes);

//If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
