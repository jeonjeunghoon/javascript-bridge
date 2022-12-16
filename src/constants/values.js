const REG_EXP = Object.freeze({
  onlyNumbers: /^[0-9]+$/,
  onlyAlphabets: /^[a-zA-Z]+$/,
});

const SIZE = Object.freeze({
  min: 3,
  max: 20,
});

const BRIDGE = Object.freeze({
  downDirection: 0,
  upDirection: 1,
  up: 'U',
  down: 'D',
});

const MOVE = Object.freeze({
  step: 1,
  correct: 'O',
  incorrect: 'X',
});

module.exports = {
  REG_EXP,
  SIZE,
  BRIDGE,
  MOVE,
};
