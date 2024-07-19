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

app.get('/admin_login.html', (req, res) => {
    res.sendFile(__dirname + '/admin_login.html');
});

app.post('/admin_login.html', (req, res) => {
    let id = req.body.id;
    let password = req.body.password;

    connection.query('SELECT * FROM admin_details WHERE id = "' + id + '" AND password = "' + password + '"', (err, results) => {
        if (err) throw err;


        else if (results.length === 0) {
            res.write('<script>alert("Invalid credentials.");</script>');
            res.sendFile(__dirname + '/admin_login.html');
        }


        else {
            console.log(results);
            console.log("Credentials Matched.");
            res.redirect('/Admin_access.html');
        }
    });



    connection.end();
});

// const port = 5500;

// app.listen(port, '192.168.0.10', () => console.log(`This app is listening on port ${port} on server '192.168.0.10'`));

const port = 5500;
const ip = '127.0.0.1';

app.listen(port, ip, () => console.log(`This app is listening on port ${port} on IP address ${ip}`));



