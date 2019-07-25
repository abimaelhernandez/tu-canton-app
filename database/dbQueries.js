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

const queryTeams = (cb) => {
  connection.query('SELECT team_name from catalogo_de_equipos', (err, result, fields)=> {
    if (err){
      cb(err, null);
    } else {
      cb(null, result)
    }
  })
}

const queryUsers = (teamName) => {
  return new Promise ((resolve, reject) =>{
    connection.query('SELECT * from catalogo_de_usuarios WHERE user_team_name = ?', [teamName], (err, results, fields) => {
      if(results){
        console.log('results from query db :', results);
        return resolve(results)
      } else
      console.log('error in query db : ', err);
      return reject(err)
    })
  })
}

module.exports = {
  queryTeams,
  queryUsers
}
