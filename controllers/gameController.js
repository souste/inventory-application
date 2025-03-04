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

const createGameGet = (req, res) => {
  res.render("createGame");
};

const createGamePost = async (req, res) => {
  try {
    const { name, length, meta_score, user_score, price } = req.body;

    await pool.query(
      `INSERT INTO games (name, length, meta_score, user_score, price)
  VALUES ($1, $2, $3, $4, $5)`,
      [name, length, meta_score || null, user_score || null, price]
    );

    res.redirect("/games");
  } catch (error) {
    console.error("Error adding game", error);
    res.status(500).send("Server Error");
  }
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

const updateGameGet = async (req, res) => {
  try {
    const gameId = parseInt(req.params.id, 10);
    const result = await pool.query("SELECT * FROM games WHERE id = $1", [gameId]);

    if (result.rows.length === 0) {
      return res.status(404).send("Game not found");
    }

    const game = result.rows[0];
    res.render("updateGame", { game });
  } catch (error) {
    console.error("Error fetching game for update", error);
    res.status(500).send("Server Error");
  }
};

const updateGamePut = async (req, res) => {
  try {
    const gameId = parseInt(req.params.id, 10);
    const { name, length, meta_score, user_score, price } = req.body;

    await pool.query(
      `UPDATE games 
       SET name = $1, length = $2, meta_score = $3, user_score = $4, price = $5 WHERE id = $6`,
      [name, length, meta_score || null, user_score || null, price, gameId]
    );
    res.redirect(`/games/${gameId}`);
  } catch (error) {
    console.error("Error updating game", error);
    res.status(500).send("Server Error");
  }
};

const deleteSingleGame = (req, res) => {
  const gameId = req.params.id;
  res.send(`This will delete game with ID: ${gameId}`);
};

module.exports = {
  getAllGames,
  createGameGet,
  createGamePost,
  getSingleGame,
  updateGameGet,
  updateGamePut,
  deleteSingleGame,
};
