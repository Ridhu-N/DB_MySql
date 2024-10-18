const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tiger',
  database: 'teachers',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.use(express.json());

app.post('/api/user', (req, res) => {
  const { name, email } = req.body;
  const sql = 'Select * from users';
  connection.query(sql, [name, email], (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json({ message: 'User added successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
