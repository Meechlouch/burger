// Import the ORM  to create functions that will interact withe the database.
const orm = require("../config/orm.js");

let burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },

  insertOne: function (col, vals, cb) {
    orm.insertOne("burgers", cols, vals, (res) => {
      cb(res);
    });
  },

  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, (res) => {
      cb(res);
    });
  },
};

module.exports = burger;
