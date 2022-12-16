const MissionUtils = require('@woowacourse/mission-utils');

const random = {
  pickNumberInRange(startInclusive, endInclusive) {
    return MissionUtils.Random.pickNumberInRange(startInclusive, endInclusive);
  },

  pickNumberInList(array) {
    return MissionUtils.Random.pickNumberInList(array);
  },

  pickUniqueNumbersInRange(startInclusive, endInclusive, count) {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      startInclusive,
      endInclusive,
      count
    );
  },

  shuffle(array) {
    return MissionUtils.Random.shuffle(array);
  },
};

module.exports = random;
