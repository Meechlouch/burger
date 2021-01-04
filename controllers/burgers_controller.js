const express = require("express");
// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

let router = express.Router();
// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.selectAll((data) => {
    let hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

module.exports = router;
