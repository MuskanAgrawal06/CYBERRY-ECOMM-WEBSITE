const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { query } = require('express');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'new_db'
});

// Connect to the database
connection.connect();

// Use the body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Handle the form submission
app.post('/submit.html', (req, res) => {
    // Get the form data
    const name = req.body.name;
    const mobile = req.body.mobile;
    const email = req.body.email;
    const password = req.body.password;

    // Insert the data into the database
    connection.query('INSERT INTO users (name, mobile, email, password) VALUES (?, ?, ?, ?)', [name, mobile, email, password], (error, results, fields) => {
        if (error) throw error;
        console.log('Data inserted successfully!');
        res.send('Data inserted successfully!');
        
    });
});

// Start the server
app.listen(5500, () => {
    console.log('Server started on port 5500');

    
    console.log(query);

});
