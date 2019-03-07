
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('guns').del()
    .then(function () {
      // Inserts seed entries
      return knex('guns').insert([
        {id: 1, name: 'Beretta M9A1', type:'handgun'},
        {id: 2, name: 'AK47', type:'rifle'},
        {id: 3, name: 'M4A1', type: 'rifle'},
        {id: 4, name: 'SR-3M Vikhr', type: 'rifle'},
        {id: 5, name: 'FAMAS G1', type: 'rifle'},
        {id: 6, name: 'SIG-Sauer 556xi', type: 'rifle'}
      ]);
    });
};
