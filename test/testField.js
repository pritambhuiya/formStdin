const { Field } = require('../src/field.js');
const assert = require('assert');

describe('Field', () => {
  it('Should give prompt of the field', () => {
    const field = new Field('name', 'Enter name');
    assert.strictEqual(field.getPrompt(), 'Enter name');
  });

  it('Should give response of the field', () => {
    const field1 = new Field('name', 'Enter name');
    assert.strictEqual(field1.getResponse(), '');

    const field2 = new Field('name', 'Enter name', 'abin');
    assert.strictEqual(field2.getResponse(), 'abin');
  });
});
