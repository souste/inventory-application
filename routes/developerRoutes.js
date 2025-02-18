const { Router } = require("express");
const developerController = require("../controllers/developerController");

const developerRouter = Router();

developerRouter.get("/", developerController.getAllDevelopers);
developerRouter.get("/create", developerController.createDeveloperGet);
developerRouter.post("/create", developerController.createDeveloperPost);
developerRouter.get("/:id", developerController.getSingleDeveloper);
developerRouter.get("/:id/edit", developerController.editSingleDeveloper);
developerRouter.delete("/:id", developerController.deleteSingleDeveloper);

module.exports = developerRouter;
