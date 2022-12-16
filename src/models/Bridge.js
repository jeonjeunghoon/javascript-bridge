const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const OutputView = require('../views/OutputView');
const validator = require('../utils/validator');

class Bridge {
  #data;

  constructor(size) {
    this.#data = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
  }

  checkBridge() {
    try {
      this.#validate();
    } catch (error) {
      OutputView.printError(error);
      return false;
    }

    return true;
  }

  #validate() {
    validator.checkTruthy(this.#data);
    validator.checkTypeOfArray(this.#data);
    validator.checkBridgeSize(this.#data);
    validator.checkBridgeIncludes(this.#data);
  }

  get() {
    return this.#data;
  }
}

module.exports = Bridge;
