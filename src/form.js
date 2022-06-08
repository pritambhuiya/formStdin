class Form {
  #fields;
  #currentFieldIndex;

  constructor(fields) {
    this.#fields = fields;
    this.#currentFieldIndex = 0;
  }

  incrementIndex() {
    return this.#currentFieldIndex++;
  }

  getCurrentPrompt() {
    const currentIndex = this.#currentFieldIndex;
    this.incrementIndex();
    return this.#fields[currentIndex].getPrompt();
  }

  submittedAllResponses() {
    return this.#fields.every((field) => field.getResponse() || '');
  }
}

module.exports = { Form };
