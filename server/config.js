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


module.exports = app;
