const getAllGames = (req, res) => {
  res.send("This is for all games");
};

const createGameGet = (req, res) => {
  res.send("This will take me to the Game Create Form");
};

const createGamePost = (req, res) => {
  res.send("This should post the new game");
};

const getSingleGame = (req, res) => {
  const gameId = req.params.id;
  res.send(`This is for game with  ID: ${gameId}`);
};

const editSingleGame = (req, res) => {
  const gameId = req.params.id;
  res.send(`This will edit game with ID: ${gameId}`);
};

const deleteSingleGame = (req, res) => {
  const gameId = req.params.id;
  res.send(`This will delete game with ID: ${gameId}`);
};

module.exports = { getAllGames, createGameGet, createGamePost, getSingleGame, editSingleGame, deleteSingleGame };
