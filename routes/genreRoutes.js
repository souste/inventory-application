const { Router } = require("express");
const genreController = require("../controllers/genreController");

const genreRouter = Router();

genreRouter.get("/", genreController.getAllGenres);
genreRouter.get("/create", genreController.createGenreGet);
genreRouter.post("/create", genreController.createGenrePost);
genreRouter.get("/:id", genreController.getSingleGenre);
genreRouter.get("/:id/edit", genreController.editSingleGenre);
genreRouter.delete("/:id", genreController.deleteSingleGenre);

module.exports = genreRouter;
