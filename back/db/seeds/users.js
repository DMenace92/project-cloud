exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, firstName:'Dennis', lastName:'Enwiya', middleName:'Andrew', username: 'Dennis', password:'d', email: 'd@d.com'},
        {id: 2, firstName:'David', lastName:'Enwiya', middleName:'Andrew', username: 'David', password:'a', email: 'a@a.com'},
        {id: 3, firstName:'donna', lastName:'Enwiya', middleName:'Maria', username:'Donna', password:'o',email:'o@o.com'}
      ]);
    });
};
