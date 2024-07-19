const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
  host: 'localhost', // change the host to the server's IP address
  user: 'root',
  password: '1234',
  database: 'new_db'
});

const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/Admin_access.html', (req, res) => {
  res.sendFile(__dirname + '/Admin_access.html');
});

app.post('/Admin_access.html', (req, res) => {
  let p_id = req.body.product_id;
  let p_name = req.body.product_name;
  let p_quantity = req.body.product_quantity;
  let p_price = req.body.product_price;
  
  let d_p_id = req.body.delete_product_id;
  let d_p_name = req.body.delete_product_name;

  connection.query('INSERT INTO products VALUES("' + p_id+ '","' + p_name + '","' + p_quantity + '","' +p_price + '");', (err, results) => {
    if (err) throw err;
    else {
      console.log(results);
      console.log("inserted successfully.");

      connection.query('DELETE FROM products WHERE product_id = ? AND product_name = ?;', [d_p_id, d_p_name], (err, results) => {
        if (err) throw err;
        else {
          console.log(results);
          console.log("Deleted successfully.");
          res.redirect('/Admin_access.html');
        }
      });
    }
  });

  connection.end();
});

const port = 5500;
const ip = '127.0.0.1';

app.listen(port, ip, () => console.log(`This app is listening on port ${port} on IP address ${ip}`));
