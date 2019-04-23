
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, firstName:'Dennis', lastNmae:'Enwiya', middleName:'Andrew', username: 'Dennis', password:'d', email: 'd@d.com'},
        {id: 2, firstName:'David', lastname:'Enwiya', middleName:'Andrew', username: 'David', password:'a', email: 'a@a.com'},
        {id: 3, firstName:'donna', lastName:'Enwiya', middleName:'Maria', username:'Donna', password:'o',email:'o@o.com'}
      ]);
    });
};
