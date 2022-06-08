const { Field } = require('../src/field.js');
const assert = require('assert');

describe('Field', () => {
  it('Should give prompt of the field', () => {
    const field = new Field('name', 'Enter name');
    assert.strictEqual(field.getPrompt(), 'Enter name');
  });

  it('Should give response of the field', () => {
    const field1 = new Field('name', 'Enter name');
    assert.strictEqual(field1.getResponse(), null);

    const field2 = new Field('name', 'Enter name', 'abin');
    assert.strictEqual(field2.getResponse(), 'abin');
  });

  it('Should give name of the field', () => {
    const field = new Field('name', 'Enter name');
    assert.strictEqual(field.getName(), 'name');
  });

  it('Should set response of that field', () => {
    const field = new Field('name', 'Enter name');
    const response = 'abin';

    field.setResponse(response);
    assert.strictEqual(field.getResponse(), response);
  });

  it('Should tell whether response found or not', () => {
    const nameField = new Field('name', 'Enter name', 'abin');
    assert.strictEqual(nameField.isResponseFound(), true);

    const dobField = new Field('dob', 'Enter dob');
    assert.strictEqual(dobField.isResponseFound(), false);
  });
});
