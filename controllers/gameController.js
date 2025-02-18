const getAllGames = (req, res) => {
  res.send("This is for all games");
};

const createUsernameGet = (req, res) => {
  res.send("This will take me to the Game Create Form");
};

const createUserPost = (req, res) => {
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
  res.send(`This will delete game single ID: ${gameId}`);
};

module.exports = { getAllGames, createUsernameGet, createUserPost, getSingleGame, editSingleGame, deleteSingleGame };
