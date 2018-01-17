let Controller = require("./controller.js");
let PlayerController = require("./player-controller");
let GameController = require("./game-controller.js");

class ServerController extends Controller {

    constructor() {
        this.playerController = PlayerController;
        this.gameController = GameController;
    }
}

module.exports = ServerController;
