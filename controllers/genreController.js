const pool = require("../db/pool");

const getAllGenres = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM genres");
    res.render("genres", { genres: result.rows });
  } catch {
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
      "SELECT games.id, games.name, games.length, games.price FROM games JOIN game_genres ON games.id = game_genres.game_id WHERE game_genres.genre_id = $1",
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

module.exports = {
  getAllGenres,
  getGamesByGenre,
};
