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

exports.getClient =(req, res) => {
  console.log('getr client Routes', req.body);
  let clientID = req.body.userID;
  //res.send('hola')
  database.queryClient(clientID)
  .then(data => {
    res.send(data)
  })
  .catch(error => {
    console.log(error);
  })
}
