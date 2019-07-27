const database = require("../database/dbQueries.js");

const getResponce = (req, res) => {
  console.log(' getResponce dentro de routes.js', req.body);
  let teamID = req.body.id;
  //res.send('hola')
  database.queryUsers(teamID)
  .then(data => {
    res.send(data)
  })
  .catch(error => {
    console.log(error);
  })
}

const getClient =(req, res) => {
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

module.exports = {
  getClient,
  getResponce
}
