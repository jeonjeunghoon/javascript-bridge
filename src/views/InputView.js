const console = require('../utils/console');
const { MESSAGE_QUERY } = require('../constants/messages');

const InputView = {
  readBridgeSize(generateBridge) {
    console.readline(MESSAGE_QUERY.BRIDGE_SIZE, generateBridge);
  },

  readMoving(movePlayer) {
    console.readline(MESSAGE_QUERY.MOVING, movePlayer);
  },

  readGameCommand(quarter) {
    console.readline(MESSAGE_QUERY.GAME_COMMAND, quarter);
  },

  close() {
    console.close();
  },
};

module.exports = InputView;
