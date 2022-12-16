const convertor = require('../utils/convertor');

class Map {
  #data;

  generate(map, bridge) {
    this.#data = convertor.convertMapToPrintableMap(map, bridge);
  }

  get() {
    return this.#data;
  }
}

module.exports = Map;
