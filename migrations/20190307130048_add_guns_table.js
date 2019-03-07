exports.up = function(knex, Promise) {
    return knex.schema.createTable('guns', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
      tbl.string('type', 255).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    // undo the operation in up
    return knex.schema.dropTableIfExists('guns');
  };