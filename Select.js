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
app.get("/select", (req, res) => {
    let id=req.params.id;
  let sql =
    'select * from users';
  con.query(sql,[id], (err, result) => {
    res.write(JSON.stringify(result))
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
