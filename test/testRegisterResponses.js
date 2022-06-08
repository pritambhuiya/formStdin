const { registerResponses } = require('../src/registerResponses.js');
const { Form } = require('../src/form.js');
const { Field } = require('../src/field.js');
const assert = require('assert');

const createForm = () => {
  const nameField = new Field('name', 'Enter name');
  const dobField = new Field('dob', 'Enter dob');

  return new Form([nameField, dobField]);
};

describe('RegisterResponses', () => {
  it('Should register responses to the proper field', () => {
    const form = createForm();
    assert.deepStrictEqual(form.getAllResponses(), [
      { field: 'name', response: null },
      { field: 'dob', response: null }
    ]);

    registerResponses(form, 'abin');
    assert.deepStrictEqual(form.getAllResponses(), [
      { field: 'name', response: 'abin' },
      { field: 'dob', response: null }
    ]);

    registerResponses(form, '1-1-1');
    assert.deepStrictEqual(form.getAllResponses(), [
      { field: 'name', response: 'abin' },
      { field: 'dob', response: '1-1-1' }
    ]);
  });
});

