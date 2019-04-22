const users = require("../controllers/users.js");
//Update the name of the controller below and rename the file.

module.exports = function(app){
//users
  app.get('/', users.index);

}