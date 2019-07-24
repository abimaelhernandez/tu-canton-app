require('dotenv').config()
console.log('inside of db Queries :');

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "canton"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const thisIsMyFunction = (cb) => {
  connection.query('SELECT team_name from catalogo_de_equipos', (err, result, fields)=> {
    if (err){
      cb(err, null);
    } else {
      cb(null, result)
    }
  })
}

module.exports = {
  thisIsMyFunction
}
