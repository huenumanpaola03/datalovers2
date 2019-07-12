global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

// Describe a quien voy a testear
describe('data', () => {

  //que voy a testear
  it('debería ser una objeto', () => {
    assert.equal(typeof data, 'object');
  });

  describe('data,filter', () => {
    it('debería ser una función', () => {
     assert.equal(typeof data.filter, 'function');
  });

})
})

