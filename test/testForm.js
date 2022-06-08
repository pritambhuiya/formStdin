const { Field } = require('../src/field.js');
const { Form } = require('../src/form.js');
const assert = require('assert');

describe('form', () => {
  it('Should give current prompt', () => {
    const nameField = new Field('name', 'Enter name');
    const dobField = new Field('dob', 'Enter dob', '1-1');
    const form = new Form([nameField, dobField]);

    assert.deepStrictEqual(form.getCurrentPrompt(), 'Enter name');
    assert.deepStrictEqual(form.getCurrentPrompt(), 'Enter dob');
  });

  it('Should tell whether all responses are submitted or not', () => {
    const nameField = new Field('name', 'Enter name', 'abin');
    const dobField = new Field('dob', 'Enter dob', '1-1');
    const form1 = new Form([nameField, dobField]);
    assert.deepStrictEqual(form1.submittedAllResponses(), true);

    const hobbiesField = new Field('hobbies', 'Enter hobbies', '');
    const form2 = new Form([nameField, hobbiesField]);
    assert.deepStrictEqual(form2.submittedAllResponses(), false);
  });
});
