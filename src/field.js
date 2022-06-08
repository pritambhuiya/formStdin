class Field {
  #name;
  #prompt;
  #response;

  constructor(name, prompt, response = '') {
    this.#name = name;
    this.#prompt = prompt;
    this.#response = response;
  }

  getPrompt() {
    return this.#prompt;
  }

  getResponse() {
    return this.#response;
  }
}

module.exports = { Field };
