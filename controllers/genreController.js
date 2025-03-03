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

const createGenreGet = (req, res) => {
  res.send("This will take me to the Genre Create Form");
};

const createGenrePost = (req, res) => {
  res.send("This should post the new Genre");
};

const getSingleGenre = async (req, res) => {
  const genreId = req.params.id;
  try {
    const result = await pool.query("SELECT * FROM genres WHERE id = $1", [genreId]);

    if (result.rows.length === 0) {
      return res.status(404).send("Genre not found");
    }
    const genre = result.rows[0];
    res.render("singleGenre", { genre });
  } catch (error) {
    console.error("Error fetching genre", error);
    res.status(500).send("Server Error");
  }
};

const editSingleGenre = (req, res) => {
  const genreId = req.params.id;
  res.send(`This will edit Genre with ID: ${genreId}`);
};

const deleteSingleGenre = (req, res) => {
  const genreId = req.params.id;
  res.send(`This will delete Genre with ID: ${genreId}`);
};

module.exports = {
  getAllGenres,
  createGenreGet,
  createGenrePost,
  getSingleGenre,
  editSingleGenre,
  deleteSingleGenre,
};
