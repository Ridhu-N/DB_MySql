const express = require('express');
const mysql = require('mysql');
const app = express();
const con = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'tiger',
});
app.get('/createDb', (req, res) => {
    let sql = 'CREATE DATABASE teachers';
    con.query(sql, (err, result) => {
        res.send('Database Created');
        console.log("connected")
    });
});
app.listen('3002', () => {
    console.log('Server started');
});