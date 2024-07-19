const mysql = require('mysql');
const express = require('express');
const app = express();
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'new_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database with ID: ' + connection.threadId);
});
app.get('/fetch.html', (req, res) => {
    const userId = req.params.id;
    const sql = 'SELECT * FROM users1 WHERE id = 10';
  
    connection.query(sql, [userId], (err, result) => {
      if (err) throw err;
  console.log(result);
  
      // Render the user profile page with the retrieved user information
      res.render('userProfile', { user: result[0] });
    });
  });
  