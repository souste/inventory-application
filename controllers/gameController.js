const pool = require("../db/pool");

const getAllGames = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM games");
    res.render("games", { games: result.rows });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

const getGamesByGenre = async (req, res) => {
  try {
    const genreId = parseInt(req.params.id);
    const genreResult = await pool.query("SELECT name FROM genres WHERE id = $1", [genreId]);

    if (genreResult.rows.length === 0) {
      return res.status(404).send("Genre Not Found");
    }

    const gamesResult = await pool.query(
      "SELECT games.id, games.name FROM games JOIN game_genres ON games.id = game_genres.game_id WHERE game_genres.genre_id = $1",
      [genreId]
    );

    res.render("genreGames", {
      genre: genreResult.rows[0],
      games: gamesResult.rows,
      message: gamesResult.rows.length === 0 ? "No games found in this genre" : null,
    });
  } catch (error) {
    console.error("Error fetching by genre", error);
    res.status(500).send("Server Error");
  }
};

const createGameGet = (req, res) => {
  res.send("This will take me to the Game Create Form");
};

const createGamePost = (req, res) => {
  res.send("This should post the new game");
};

const getSingleGame = async (req, res) => {
  const gameId = parseInt(req.params.id, 10);
  try {
    const result = await pool.query("SELECT * FROM games WHERE id = $1", [gameId]);

    if (result.rows.length === 0) {
      return res.status(404).send("Game not found");
    }

    const game = result.rows[0];
    res.render("singleGame", { game });
  } catch (error) {
    console.error("Error fetching game:", error);
    res.status(500).send("Server Error");
  }
};

const editSingleGame = (req, res) => {
  const gameId = req.params.id;
  res.send(`This will edit game with ID: ${gameId}`);
};

const deleteSingleGame = (req, res) => {
  const gameId = req.params.id;
  res.send(`This will delete game with ID: ${gameId}`);
};

module.exports = {
  getAllGames,
  getGamesByGenre,
  createGameGet,
  createGamePost,
  getSingleGame,
  editSingleGame,
  deleteSingleGame,
};
