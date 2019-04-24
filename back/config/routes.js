const users = require("../controllers/users.js");


module.exports = function(app){
  //users 
  app.get('/', users.index);

  //admin_users
  app.get('/',users.index);
  

}