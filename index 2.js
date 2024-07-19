 
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // change the host to the server's IP address
  user: 'root',
  password: '1234',
  database: 'new_db'
});


const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/create_account.html', (req, res) => {
  res.sendFile(__dirname + '/create_account.html');
});

app.post('/create_account.html', (req, res) => {
  let username = req.body.name;
  let email = req.body.email;
  let mobileno = req.body.mobileno;
  let password = req.body.password;

  connection.query('INSERT INTO USERS VALUES("' + username + '","' + email + '","' + mobileno + '","' + password + '");', (err, results) => {
    if (err) throw err;
    else {
      console.log(results);
      console.log("inserted successfully.");
      res.redirect('/login.html');
    }
  });

  connection.end();
});

// const port = 5500;

// app.listen(port, '192.168.0.10', () => console.log(`This app is listening on port ${port} on server '192.168.0.10'`));

const port = 5500;
const ip = '127.0.0.1';

app.listen(port, ip, () => console.log(`This app is listening on port ${port} on IP address ${ip}`));
