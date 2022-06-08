class Form {
  #fields;
  #currentFieldIndex;

  constructor(fields) {
    this.#fields = fields;
    this.#currentFieldIndex = 0;
  }

  #incrementIndex() {
    return this.#currentFieldIndex++;
  }

  #getCurrentField() {
    return this.#fields[this.#currentFieldIndex];
  }

  getCurrentPrompt() {
    return this.#getCurrentField().getPrompt();
  }

  submittedAllResponses() {
    return this.#fields.every((field) => field.isResponseFound());
  }

  fillField(response) {
    this.#getCurrentField().setResponse(response);
    this.#incrementIndex();
  }

  getAllResponses() {
    return this.#fields.map((field) => getResponse(field));
  }
}

const getResponse = (field) => {
  const name = field.getName();
  const response = field.getResponse();
  return { field: name, response };
};

module.exports = { Form, getResponse };
