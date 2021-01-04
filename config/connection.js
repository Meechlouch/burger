const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 5000,
  user: "root",
  password: "mysql",
  database: "burgers_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`Connected at ${connection.threadId} \n`);
});

module.exports = connection;
