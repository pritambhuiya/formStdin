const { Field } = require('../src/field.js');
const { Form, getResponse } = require('../src/form.js');
const assert = require('assert');

describe('form', () => {
  it('Should give current prompt', () => {
    const nameField = new Field('name', 'Enter name');
    const dobField = new Field('dob', 'Enter dob', '1-1');
    const form = new Form([nameField, dobField]);

    assert.strictEqual(form.getCurrentPrompt(), 'Enter name');
  });

  it('Should tell whether all responses are submitted or not', () => {
    const nameField = new Field('name', 'Enter name', 'abin');
    const dobField = new Field('dob', 'Enter dob', '1-1');
    const form1 = new Form([nameField, dobField]);
    assert.strictEqual(form1.submittedAllResponses(), true);

    const hobbiesField = new Field('hobbies', 'Enter hobbies');
    const form2 = new Form([nameField, hobbiesField]);
    assert.strictEqual(form2.submittedAllResponses(), false);
  });

  it('Should fill current Field with given response', () => {
    const nameField = new Field('name', 'Enter name');
    const form = new Form([nameField]);
    form.fillField('abin');

    assert.deepStrictEqual(getResponse(nameField),
      { field: 'name', response: 'abin' });
  });

  it('Should return field-response pair in array', () => {
    const nameField = new Field('name', 'Enter name', 'abin');
    const dobField = new Field('dob', 'Enter dob');
    const form = new Form([nameField, dobField]);

    assert.deepStrictEqual(form.getAllResponses(), [
      { field: 'name', response: 'abin' },
      { field: 'dob', response: null }
    ]);
  });
});
