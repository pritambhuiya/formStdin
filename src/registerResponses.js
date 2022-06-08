const { Form } = require('./form.js');
const { Field } = require('./Field.js');

const displayPrompt = (form) => console.log(form.getCurrentPrompt());

const registerResponses = (form) => {
  displayPrompt(form);

  process.stdin.on('data', (chunk) => {
    form.fillField(chunk.trim());

    if (form.submittedAllResponses()) {
      console.log('Thank you');
      console.log(form.getAllResponses());
      process.stdin.destroy();
      return;
    }

    displayPrompt(form);
  });
};

const createForm = () => {
  const nameField = new Field('name', 'Enter name');
  const dobField = new Field('dob', 'Enter dob');
  return new Form([nameField, dobField]);
};

const main = () => {
  process.stdin.setEncoding('utf8');
  const form = createForm();
  registerResponses(form);
};

main();
