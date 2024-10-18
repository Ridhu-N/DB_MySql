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
app.get("/insert", (req, res) => {
    let id=req.params.id;
  let sql =
    'INSERT INTO users(ID, NAME, AGE, CITY) VALUES(1,"RIDHU",22,"CBE")';
  con.query(sql,[id], (err, result) => {
    res.send("Values Created");
    res.end();
  });
  con.getConnection((err, Connection) => {
    if (err) {
      throw err;
    }
    console.log("Values inserted succesfully");
  });
});
app.listen(3002, function () {
  console.log("listening to the port ");
});
