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

module.exports = {
  getAllGenres,
};
