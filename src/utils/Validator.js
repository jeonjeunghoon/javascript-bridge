const { MESSAGE_ERROR } = require('../constants/messages');
const { REG_EXP, SIZE, BRIDGE } = require('../constants/values');

const validator = {
  checkTruthy(value) {
    if (!value) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },

  checkType(value, target) {
    if (typeof value !== typeof target) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },

  checkStringIncludes(string) {
    if (!REG_EXP.onlyNumbers.test(string)) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },

  checkTypeOfArray(array) {
    if (!Array.isArray(array)) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },

  checkSizeRange(size) {
    if (size < SIZE.min || size > SIZE.max) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },

  checkBridgeSize(bridge) {
    if (bridge.length < SIZE.min || bridge.length > SIZE.max) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },

  checkBridgeIncludes(bridge) {
    if (!bridge.include(BRIDGE.up) && !bridge.include(BRIDGE.down)) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },

  checkMoving(moving) {
    if (moving !== 'U' && moving !== 'D') {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },

  checkGameCommand(gameCommand) {
    if (gameCommand !== 'R' && gameCommand !== 'Q') {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },
};

module.exports = validator;
