require('dotenv').config()
console.log('inside of db Queries :');

const mysql = require('mysql');

const connection = mysql.createConnection({
   host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
