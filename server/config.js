const express = require('express');

const app = express();
const path = require('path')
const database = require("../database/dbQueries.js");

app.use(express.static(__dirname + "/../client/dist"));

app.get('/getTeams', (req, res) => {
  res.send('hello ')
})

module.exports = app;
