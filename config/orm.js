// Import MySQL connection.
const connection = require("../config/connection.js");

function printQuestionMarks(num) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  let arr = [];
  for (let key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

let orm = {
  selectAll: function (table, cb) {
    let queryString = `SELECT * FROM ${table};`;

    connection.query(queryString, (err, resp) => {
      if (err) {
        throw err;
      }
      cb(resp);
    });
  },

  insertOne: function (table, cols, vals, cb) {
    let queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, (err, resp) => {
      if (err) throw err;
      cb(resp);
    });
  },

  updateOne: function (table, objColVals, condition, cb) {
    let queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);

    connection.query(queryString, (err, resp) => {
      if (err) throw err;
      cb(resp);
    });
  },
};

module.exports = orm;
