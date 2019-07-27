const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const path = require('path')
const route = require("./routes");
const database = require("../database/dbQueries.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/../client/dist"));

app.get('/getTeams', (req, res) => {
  database.queryTeams((err,results) => {
    if(results){
      console.log('we have results :', results);
      res.send(results)
    }
    else if (err){
      console.log("we have error :");
      res.send(err)
    }
  })
})

app.post('/getSpecificTeam', route.getResponce)

app.post('/clientes', route.getClient)
/*=================================
 API querys
==================================*/
app.get(`/users/:id`, (req,res) => {
  let url = req._parsedUrl.pathname.split('/');
  let id = url[2]
  database.connection.query('SELECT * from catalogo_de_usuarios WHERE id = ?',[id], (err, result, fields)=> {
      if (err){
        res.json(err);
      } else {
        res.json(result)
      }
  })
});

module.exports = app;
