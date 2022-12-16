const { BRIDGE } = require('./constants/values');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return Array.from({ length: size }, () =>
      generateRandomNumber() === BRIDGE.upDirection ? BRIDGE.up : BRIDGE.down
    );
  },
};

module.exports = BridgeMaker;
