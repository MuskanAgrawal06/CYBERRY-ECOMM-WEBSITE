const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'new_db'

});


// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to MySQL server!');
// });

function insert(name,email,mobilenumber,password)
{


const query = "INSERT  INTO  USERS ( name,email,mobilenumber,password) VALUES (?,?,?,?)";
const values = [name,email,mobilenumber,password];

connection.query(query,values, (err, results)=> {
  if (err) throw err;
  console.log(results);
  alert("Your have Successfully Created your account.");
});

}
connection.query('SELECT * FROM users;', (err, results) => {
  if (err) throw err;
  console.log(results);
});



connection.end();
}

// function myfunction(name,email,mobilenumber,password)
// {
// insert(name,email,mobilenumber,password);
// }

insert('muskan','mu@gmail.com','9753314312','PASSWORD');
