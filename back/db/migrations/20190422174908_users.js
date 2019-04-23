exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", (table)=>{
    table.increments();
    table.string("firstName");
    table.string("lastName");
    table.string("middleName");
    table.string("username");
    table.string("password");
    table.string("email");
    table.text("img_url");
    table.timestamps(true,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users")
};
