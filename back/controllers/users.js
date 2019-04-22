const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: (req, res) =>{
    knex("users").then(users =>{
      res.send(users);
    })
    
  },
  login: (req, res) => {
    knex('users')
      .where('username', req.body.username)
      .then((results) => {
        if (results.length >= 1) {
          let user = results[0]
          hasher.check(user, req.body)
            .then((matches) => {
              if (matches) {
                delete user.password;
                const token = jwt.sign(user, secret)
                res.json({message: "Successfully signed in", token, user})
              } else {
                res.status(401).send({
                  message: 'You are not authorized, Please log in to continue.'
                })
              }
            })
        } else {
          return res.status(401).send({
            message: 'You are not authorized, Please log in to continue.'
          })
        }
      })
  },

}