const { Field } = require('../src/field.js');
const assert = require('assert');

describe('Field', () => {
  it('Should give details of the field', () => {
    const field1 = new Field('name', 'prompt');
    assert.deepStrictEqual(field1.getDetails(),
      { name: 'name', prompt: 'prompt', response: '' });

    const field2 = new Field('name', 'prompt', 'response');
    assert.deepStrictEqual(field2.getDetails(),
      { name: 'name', prompt: 'prompt', response: 'response' });
  });
});
