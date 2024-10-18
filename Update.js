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
app.get("/update", (req, res) => {
    let id=req.params.id;
  let sql =
    'Update users set name="Ridhu" where city="CBE";';
  con.query(sql,[id], (err, result) => {
    res.send("Values Updated");
    res.end();
  });
  con.getConnection((err, Connection) => {
    if (err) {
      throw err;
    }
    console.log("Values updated succesfully");
  });
});
app.listen(3002, function () {
  console.log("listening to the port ");
});
