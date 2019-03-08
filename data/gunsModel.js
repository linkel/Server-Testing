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
  await db('guns').update(changes).where('id', id)
  return changes;
}

async function remove(id) {
  let find = await findById(id)
  console.log(find)
  if (find.length !== 0) {
    await db('guns').delete().where('id',id)
    return id;
  } else {
    return 0
  }
}

function getAll() {
  return db('guns');
}

function findById(id) {
  return db('guns').where('id',id);
}
