const { Router } = require("express");
const genreController = require("../controllers/genreController");

const genreRouter = Router();

genreRouter.get("/", genreController.getAllGenres);
genreRouter.get("/:id", genreController.getGamesByGenre);

module.exports = genreRouter;
