class Field {
  #name;
  #prompt;
  #response;

  constructor(name, prompt, response = '') {
    this.#name = name;
    this.#prompt = prompt;
    this.#response = response;
  }

  getDetails() {
    return { name: this.#name, prompt: this.#prompt, response: this.#response };
  }
}

module.exports = { Field };
