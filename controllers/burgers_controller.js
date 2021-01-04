const express = require("express");
const router = express.Router();
// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create route that SELECT ALL FROM burgers and renders it with handlebars
router.get("/", (req, res) => {
  burger.selectAll(function (data) {
    let hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

module.exports = router;
