const db = require('./dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(gun) {
  const [id] = await db('guns').insert(gun);

  return db('guns')
    .where({ id })
    .first();
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('guns');
}

function findById(id) {
  return null;
}
