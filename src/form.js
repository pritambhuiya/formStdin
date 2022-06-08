class Form {
  #fields;

  constructor(fields) {
    this.#fields = fields;
  }

  display() {
    return this.#fields.map((theField) => {
      const { name: field, prompt, response } = theField.getDetails();
      return { field, prompt, response };
    });
  }
}

module.exports = { Form };
