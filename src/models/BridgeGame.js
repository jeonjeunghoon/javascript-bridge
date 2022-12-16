const validator = require('../utils/validator');
const OutputView = require('../views/OutputView');
const { MOVE } = require('../constants/values');

class BridgeGame {
  #data = {
    beforeMoveBridge: [],
    afterMoveBridge: [],
    startPoint: 0,
    tryCount: 1,
  };

  constructor(bridge) {
    this.#data.beforeMoveBridge = bridge;
  }

  checkMoving(moving) {
    try {
      this.#validate(moving);
    } catch (error) {
      OutputView.printError(error);
      return false;
    }

    return true;
  }

  #validate(moving) {
    validator.checkTruthy(moving);
    validator.checkType(moving, 'string');
    validator.checkMoving(moving);
  }

  move(moving) {
    if (this.#data.beforeMoveBridge[this.#data.startPoint] === moving) {
      this.#data.afterMoveBridge.push(MOVE.correct);
    } else {
      this.#data.afterMoveBridge.push(MOVE.incorrect);
    }
    this.#data.startPoint += MOVE.step;

    return this.#data.afterMoveBridge;
  }

  checkState() {
    if (this.#data.afterMoveBridge.lastIndexOf(MOVE.incorrect) >= 0) {
      return true;
    }
    if (this.#data.beforeMoveBridge.length === this.#data.startPoint) {
      return true;
    }

    return false;
  }

  checkSuccess() {
    return (
      !this.#data.afterMoveBridge.includes(MOVE.incorrect) &&
      this.#data.beforeMoveBridge.length === this.#data.startPoint
    );
  }

  retry() {
    this.#data.afterMoveBridge = [];
    this.#data.startPoint = 0;
    this.#data.tryCount += 1;
  }

  getResult() {
    return {
      result: this.#data.afterMoveBridge.includes(MOVE.incorrect)
        ? '실패'
        : '성공',
      tryCount: this.#data.tryCount,
    };
  }
}

module.exports = BridgeGame;
