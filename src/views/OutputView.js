const console = require('../utils/console');
const { MESSAGE_SYSTEM } = require('../constants/messages');
const { MOVE } = require('../constants/values');

const OutputView = {
  printStartGame() {
    console.print(MESSAGE_SYSTEM.START_GAME);
  },

  printError(error) {
    console.print(error);
  },

  printMap(map) {
    console.print(map);
  },
  printResult(map, { result, tryCount }) {
    console.print('최종 게임 결과');
    console.print(map);
    console.print(`게임 성공 여부: ${result}`);
    console.print(`총 시도한 횟수: ${tryCount}`);
  },
};

module.exports = OutputView;
