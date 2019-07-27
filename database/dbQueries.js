require('dotenv').config()
const mysql = require('mysql');
const bodyParser = require("body-parser");


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
  connection.query('SELECT * from catalogo_de_equipos', (err, result, fields)=> {
    if (err){
      cb(err, null);
    } else {
      cb(null, result)
    }
  })
}

const queryUsers = (teamID) => {
  return new Promise ((resolve, reject) =>{
    connection.query('SELECT * from catalogo_de_usuarios WHERE equipo_id = ?', [teamID], (err, results, fields) => {
      if(results){
        console.log('results from query db :', results);
        return resolve(results)
      } else
      console.log('error in query db : ', err);
      return reject(err)
    })
  })
}

const queryClient = (clientID) => {
  return new Promise ((resolve,reject) => {
    connection.query('SELECT * from clientes WHERE user_id = ?', [clientID], (err, results, fields) => {
      if(results){
        console.log('results from query db :', results);
        return resolve(results)
      } else
      console.log('error in query db : ', err);
      return reject(err)
    })
  })
}


const users = (id) => {
  console.log('backend :',id);
    return new Promise ((resolve,reject)=>{
      connection.query('SELECT * from catalogo_de_usuarios', (err, result, fields)=> {
        if (err){
          return reject(err, null);
        } else {
          return resolve(null, result)
        }
    })
  })
}

module.exports = {
  queryTeams,
  queryUsers,
  queryClient,
  users,
  connection
}
