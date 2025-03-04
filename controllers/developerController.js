const pool = require("../db/pool");

const getAllDevelopers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM developers");
    res.render("developers", { developers: result.rows });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

const getGamesByDeveloper = async (req, res) => {
  try {
    const developerId = parseInt(req.params.id);
    const developerResult = await pool.query("SELECT name FROM developers WHERE id = $1", [developerId]);

    if (developerResult.rows.length === 0) {
      return res.status(404).send("Developer not found");
    }

    const gameResult = await pool.query(
      "SELECT games.id, games.name, games.length, games.price FROM games JOIN game_developers ON games.id = game_developers.game_id WHERE game_developers.developer_id = $1",
      [developerId]
    );

    res.render("developerGames", {
      developer: developerResult.rows[0],
      games: gameResult.rows,
      messsage: gameResult.rows.length === 0 ? "No games found for this developer" : null,
    });
  } catch (error) {
    console.error("Error fetching game", error);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getAllDevelopers,
  getGamesByDeveloper,
};
