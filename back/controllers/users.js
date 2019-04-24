const knex = require("../db/knex.js");
const hasher = require("../config/hasher")
module.exports = {
 
  index: (req, res) => {
    knex("users").then(users => {
      res.json(users)
    })
  },
  login: (req,res)=>{
    knex('users')
    .where('username', req.body.username)
    .then((results)=>{
      if(results.length >= 1){
        let user = results[0]
        hasher.check(user,req.body)
        .then((match)=>{
          if(match){
            delete user.password;
            const token = jwt.sign(user, secret)
            res.json({message: "Successfully signed in",token, user})
          }else{
            res.status(401).send({
              message: 'you are not authorizrd, please log in to continue.'
            })
          }
        })
      } else{
        return res.status(401).send({
          message: 'you are not authorized, please log in to continue.'
        })
      }
        
      
    })
  }
}