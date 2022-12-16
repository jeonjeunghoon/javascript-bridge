const { BRIDGE, MOVE } = require('../constants/values');

const convertor = {
  convertStringToNumber(string) {
    return parseInt(string, 10);
  },

  convertMapToPrintableMap(map, bridge) {
    return this.generatePrintableMap(this.generateBridges(map, bridge));
  },

  generatePrintableMap({ upBridge, downBridge }) {
    const newUpBridge = `[ ${upBridge.join(' | ')} ]`;
    const newDownBridge = `[ ${downBridge.join(' | ')} ]`;

    return `${newUpBridge}\n${newDownBridge}\n`;
  },

  generateBridges(map, bridge) {
    const upBridge = [];
    const downBridge = [];

    this.generateUserInputs(map, bridge).forEach((v, i) => {
      v === BRIDGE.up
        ? this.fillBridge(upBridge, downBridge, map[i])
        : this.fillBridge(downBridge, upBridge, map[i]);
    });

    return {
      upBridge,
      downBridge,
    };
  },

  fillBridge(selectedBridge, anotherBridge, map) {
    selectedBridge.push(map);
    anotherBridge.push(' ');
  },

  generateUserInputs(map, bridge) {
    return map.map((v, i) =>
      v === MOVE.correct ? bridge[i] : convertor.switchBridgeElement(bridge[i])
    );
  },

  switchBridgeElement(element) {
    return element === BRIDGE.up ? BRIDGE.down : BRIDGE.up;
  },
};

module.exports = convertor;
