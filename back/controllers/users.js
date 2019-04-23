const knex = require("../db/knex.js");

module.exports = {
 
  index: (req, res) => {
    knex("users").then(users => {
      res.json(users)
    })
  },
}