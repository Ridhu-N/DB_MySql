const mysql = require("mysql");
const express = require("express");
const Connection = require("mysql/lib/Connection");
const app = express();
const con = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "tiger",
  database: "teachers",
});
app.get("/createtable", (req, res) => {
  let sql =
    "CREATE TABLE users (ID int,Name varchar(150),AGE int,CITY varchar(150));";
  con.query(sql, (err, result) => {
    res.send("Table Created");
  });
  con.getConnection((err, Connection) => {
    if (err) {
      throw err;
    }
    console.log("Table Created succesfully");
  });
});
app.listen(3002, function () {
  console.log("listening to the port ");
});
