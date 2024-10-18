const mysql = require("mysql");
const express = require('express')
const app = express()
const con = mysql.createPool({
    connectionLimit:10,
  host: "localhost",
  user: "root",
  password: "tiger",
  database: "movie_industry",
});
app.get("/dbcon", (req, res) => {
  con.getConnection((err) => {
    if (err) {
      throw err;
    } else {
      res.send("Connected to movie_industry Database");
      console.log("Database Connected");
    }
  });
});
app.listen(3002, function () {
  console.log("listening to the port ");
});
