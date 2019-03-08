const db = require('./dbConfig.js');
const Guns = require('./gunsModel');

describe('guns model', () => {
  describe('insert()', () => {
    afterEach(async () => {
      await db('guns').truncate();
    });

    it('should insert the provided guns into the db', async () => {
      await Guns.insert({ name: 'Desert Eagle', type: 'handgun' });
      await Guns.insert({ name: 'Ruger LC380', type: 'handgun' });

      const guns = await db('guns');
      expect(guns).toHaveLength(2);
    });

    it('should return correct gun name per insert', async () => {
      let gun = await Guns.insert({ name: 'FN P90', type: 'SMG' });
      expect(gun.name).toBe('FN P90');

      gun = await Guns.insert({ name: 'AK-12', type: 'rifle' });
      expect(gun.name).toBe('AK-12');
    });
  });
  describe('remove()', () => {
    afterEach(async () => {
      await db('guns').truncate();
    });
    it('should fail to remove if there is nothing to remove', async () => {
      await Guns.insert({ name: 'FN P90', type: 'SMG' });
      const result = await Guns.remove(3);
      expect(result).toBe(0);
    })
    it('should return id if successfully removed', async () => {
      await Guns.insert({ name: 'FN P90', type: 'SMG' });
      await Guns.insert({ name: 'P90', type: 'SMG' });
      const result = await Guns.remove(1);
      expect(result).toBe(1);
    })
  })
});
