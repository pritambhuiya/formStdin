class Field {
  #name;
  #prompt;
  #response;

  constructor(name, prompt, response = null) {
    this.#name = name;
    this.#prompt = prompt;
    this.#response = response;
  }

  getName() {
    return this.#name;
  }

  getPrompt() {
    return this.#prompt;
  }

  getResponse() {
    return this.#response;
  }

  setResponse(response) {
    this.#response = response;
  }

  isResponseFound() {
    return this.#response !== null;
  }
}

module.exports = { Field };
