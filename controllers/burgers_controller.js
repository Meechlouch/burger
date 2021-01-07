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

router.post("/api/burgers", (req, res) => {
  burger.insertOne("burger_name", req.body.burger_name, (result) => {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  let condition = `id = ${req.params.id}`;
  burger.updateOne("devoured", 1, condition, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ result });
  });
});

router.delete("/api/burgers/:id", (req, res) => {
  let condition = `id = ${req.params.id}`;
  burger.deleteOne(condition, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ result });
  });
});
// Export routes for server.js to use.
module.exports = router;
