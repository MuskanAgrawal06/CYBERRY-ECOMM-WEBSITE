const mysql = require('mysql');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));

const connection = mysql.createConnection({
  host: 'localhost', // change the host to the server's IP address
  user: 'root',
  password: '1234',
  database: 'new_db'
});

app.get('/profile.html', (req, res) => {
  res.sendFile(__dirname + '/profile.html');
});

app.post('/profile.html', (req, res) => {
  connection.query('SELECT * FROM USERS;', (err, results) => {
    if (err) throw err;
    else {
      console.log(results);
      const name = results[0].name;
      const email = results[0].email;
      const mobileno = results[0].mobileno;
      const password = results[0].password;
      const data = { name, email, mobileno, password };
      res.render('profile', { data });
    }
  });

  connection.end();
});

const port = 5500;
const ip = '127.0.0.1';

app.listen(port, ip, () => console.log(`This app is listening on port ${port} on IP address ${ip}`));
