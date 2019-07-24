const express = require('express');

const app = express();
const path = require('path')
const database = require("../database/dbQueries.js");

app.use(express.static(__dirname + "/../client/dist"));
console.log('inside server side');
app.get('/getTeams', (req, res) => {
  database.thisIsMyFunction((err,results) => {
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

module.exports = app;
