
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('admin_user').del()
    .then(function () {
      // Inserts seed entries
      return knex('admin_user').insert([
        
      ]);
    });
};
