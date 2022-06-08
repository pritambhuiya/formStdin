const { Field } = require('../src/field.js');
const { Form } = require('../src/form.js');
const assert = require('assert');

describe('form', () => {
  it('Should give details of all fields', () => {
    const nameField = new Field('name', 'Enter name');
    const dobField = new Field('dob', 'Enter dob', '1-1');
    const form = new Form([nameField, dobField]);

    assert.deepStrictEqual(form.display(), [
      { field: 'name', prompt: 'Enter name', response: '' },
      { field: 'dob', prompt: 'Enter dob', response: '1-1' }
    ]);
  });
});
