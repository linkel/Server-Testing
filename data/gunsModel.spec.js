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

    it('should insert the provided gun into the db', async () => {
      let gun = await Guns.insert({ name: 'FN P90', type: 'SMG' });
      expect(gun.name).toBe('FN P90');

      gun = await Guns.insert({ name: 'AK-12', type: 'rifle' });
      expect(gun.name).toBe('AK-12');
    });
  });
});
