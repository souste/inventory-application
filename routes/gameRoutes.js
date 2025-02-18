const { Router } = require("express");
const gameController = require("../controllers/gameController");

const gameRouter = Router();

gameRouter.get("/", gameController.getAllGames);
gameRouter.get("/create", gameController.createUsernameGet);
gameRouter.post("/create", gameController.createUserPost);
gameRouter.get("/:id", gameController.getSingleGame);
gameRouter.put("/:id/edit", gameController.editSingleGame);
gameRouter.post("/:id/delete", gameController.deleteSingleGame);

module.exports = gameRouter;
