const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');
const gameCommandChecker = require('../utils/gameCommandChecker');
const BridgeSize = require('../models/BridgeSize');
const Bridge = require('../models/Bridge');
const BridgeGame = require('../models/BridgeGame');
const Map = require('../models/Map');

class Game {
  #instance = {
    bridgeSize: null,
    bridge: null,
    bridgeGame: null,
    map: null,
  };

  constructor() {
    OutputView.printStartGame();
    this.#instance.map = new Map();
  }

  playGame() {
    InputView.readBridgeSize(this.#generateBridge.bind(this));
  }

  #generateBridge(size) {
    this.#instance.bridgeSize = new BridgeSize(size);
    if (!this.#instance.bridgeSize.checkSize()) {
      this.playGame();
      return;
    }
    this.#instance.bridge = new Bridge(this.#instance.bridgeSize.get());
    this.#instance.bridgeGame = new BridgeGame(this.#instance.bridge.get());

    this.#startGame();
  }

  #startGame() {
    InputView.readMoving(this.#movePlayer.bind(this));
  }

  #movePlayer(moving) {
    if (!this.#instance.bridgeGame.checkMoving(moving)) {
      this.#startGame();
      return;
    }

    this.#printResult(moving);
  }

  #printResult(moving) {
    this.#instance.map.generate(
      this.#instance.bridgeGame.move(moving),
      this.#instance.bridge.get()
    );
    OutputView.printMap(this.#instance.map.get());

    this.#checkResult();
  }

  #checkResult() {
    if (!this.#instance.bridgeGame.checkState()) {
      this.#startGame();
      return;
    }

    this.#checkEndGame();
  }

  #checkEndGame() {
    if (!this.#instance.bridgeGame.checkSuccess()) {
      InputView.readGameCommand(this.#quarter.bind(this));
      return;
    }

    this.#endGame();
  }

  #quarter(gameCommand) {
    if (!gameCommandChecker.checkGameCommand(gameCommand)) {
      this.#checkEndGame();
      return;
    }

    if (gameCommand === 'R') {
      this.#instance.bridgeGame.retry();
      this.#startGame();
      return;
    }

    this.#endGame();
  }

  #endGame() {
    OutputView.printResult(
      this.#instance.map.get(),
      this.#instance.bridgeGame.getResult()
    );
    InputView.close();
  }
}

module.exports = Game;
