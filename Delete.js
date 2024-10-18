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
app.get("/delete", (req, res) => {
    let id= req.params.id;
  let sql =
    "DELETE FROM users WHERE id=1;";
  con.query(sql, (err, result) => {
    res.send("deleted");
  });
});
app.listen(3002, function () {
  console.log("listening to the port ");
});
