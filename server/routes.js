const database = require("../database/dbQueries.js");

exports.getResponce =(req, res) => {
  console.log(' getResponce dentro de routes.js', req.body);
  let teamName = req.body.name;
  //res.send('hola')
  database.queryUsers(teamName)
  .then(data => {
    res.send(data)
  })
  .catch(error => {
    console.log(error);
  })
}
