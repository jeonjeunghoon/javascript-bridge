const MissionUtils = require('@woowacourse/mission-utils');

const console = {
  print(message) {
    MissionUtils.Console.print(message);
  },

  readline(query, callback) {
    MissionUtils.Console.readLine(query, callback);
  },

  close() {
    MissionUtils.Console.close();
  },
};

module.exports = console;
