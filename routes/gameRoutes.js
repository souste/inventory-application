const { Router } = require("express");
const gameController = require("../controllers/gameController");

const gameRouter = Router();

gameRouter.get("/", gameController.getAllGames);
gameRouter.get("/genres/:id", gameController.getGamesByGenre);
gameRouter.get("/create", gameController.createGameGet);
gameRouter.post("/create", gameController.createGamePost);
gameRouter.get("/:id", gameController.getSingleGame);
gameRouter.get("/:id/edit", gameController.editSingleGame);
gameRouter.delete("/:id", gameController.deleteSingleGame);

module.exports = gameRouter;
