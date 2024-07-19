var con = require('./connection');
var express = require('express');
var app = express();


var bodyParser = require('body-parser');

app.use((bodyParser).json());


app.use(bodyParser.urlencoded({ extended: true }));



app.get('/create_account.html', function (req, res) {
    res.sendFile(__dirname + '/create_account.html');

});


app.post('/create_account.html', function (req, res) {

    // console.log(req.body);

    var name = req.body.name;
    var email = req.body.email;
    var mobileno = req.body.mobileno;
    var password = req.body.password;

    con.connect(function (error) {
        if (error) throw error;

        var sql = "INSERT INTO users (name , email, mobileno, password) VALUES ('" + name + "', '" + email + "', '" + mobileno + "', '" + password + "')";

        con.query(sql, function (error, result) {
            if (error) throw error;

            res.send('OK DONE!!!!');

        })


    })



});



app.listen(5500);


















