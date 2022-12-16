const OutputView = require('../views/OutputView');
const convertor = require('../utils/convertor');
const validator = require('../utils/validator');

class BridgeSize {
  #data = {
    input: '',
    size: 0,
  };

  constructor(size) {
    this.#data = {
      input: size,
      size: convertor.convertStringToNumber(size),
    };
  }

  checkSize() {
    try {
      this.#validate();
    } catch (error) {
      OutputView.printError(error);
      return false;
    }

    return true;
  }

  #validate() {
    validator.checkTruthy(this.#data.input);
    validator.checkType(this.#data.input, 'string');
    validator.checkStringIncludes(this.#data.input);
    validator.checkType(this.#data.size, 0);
    validator.checkSizeRange(this.#data.size);
  }

  get() {
    return this.#data.size;
  }
}

module.exports = BridgeSize;
