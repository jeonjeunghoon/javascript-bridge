const OutputView = require('../views/OutputView');
const validator = require('./validator');

const gameCommandChecker = {
  checkGameCommand(gameCommand) {
    try {
      this.validate(gameCommand);
    } catch (error) {
      OutputView.printError(error);
      return false;
    }

    return true;
  },

  validate(gameCommand) {
    validator.checkTruthy(gameCommand);
    validator.checkType(gameCommand, 'string');
    validator.checkGameCommand(gameCommand);
  },
};

module.exports = gameCommandChecker;
