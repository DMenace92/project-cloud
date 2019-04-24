const knex = require("../db/knex.js");

module.exports ={
    index:(req,res)=>{
      knex("admin_user").then(admin_users => {
        res.json(admin_user)
      })
    }
}