exports.up = function(knex, Promise) {
  return knex.schema.createTable("admin_user",(table)=>{
      table.increments();
      table.string("firstName");
      table.string("lastNmae");
      table.string("middleName");
      table.string("username");
      table.string("password");
      table.string("email");
      table.text("img_url");
      table.timestamps(true,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema,dropTable("admin_user")
};
