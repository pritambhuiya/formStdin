const { Form } = require('./form.js');
const { Field } = require('./Field.js');
const fs = require('fs');

const displayPrompt = (form) => console.log(form.getCurrentPrompt());

const writeFile = (content) =>
  fs.writeFileSync('responses.json', JSON.stringify(content), 'utf8');

const parseResponses = (responses) => {
  const parsedResponses = {};
  responses.forEach(({ field, response }) => {
    parsedResponses[field] = response;
  });

  return parsedResponses;
};

const storeInJson = (content) => {
  const parsedResponses = parseResponses(content);
  writeFile(parsedResponses);
};

const registerResponses = (form, response) => {
  form.fillField(response.trim());

  if (!form.submittedAllResponses()) {
    displayPrompt(form);
    return;
  }

  console.log('Thank you');
  storeInJson(form.getAllResponses());
  process.stdin.destroy();
};

const createForm = () => {
  const nameField = new Field('name', 'Enter name');
  const dobField = new Field('dob', 'Enter dob');

  return new Form([nameField, dobField]);
};

const readResponses = (form) =>
  process.stdin.on('data', (response) => registerResponses(form, response));

const main = () => {
  process.stdin.setEncoding('utf8');
  const form = createForm();

  displayPrompt(form);
  readResponses(form);
};

module.exports = { main, registerResponses };
