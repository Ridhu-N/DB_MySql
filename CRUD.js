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
app.get("/insert", (req, res) => {
    let id=req.params.id;
  let sql =
    'INSERT INTO users(ID, NAME, AGE, CITY) VALUES(2,"Nathi",25,"TUP")';
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
