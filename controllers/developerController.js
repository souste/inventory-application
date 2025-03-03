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

const createDeveloperGet = (req, res) => {
  res.send("This will take me to the Developer Create Form");
};

const createDeveloperPost = (req, res) => {
  res.send("This should post the new Developer");
};

const getSingleDeveloper = async (req, res) => {
  const developerId = req.params.id;
  try {
    const result = await pool.query("SELECT * FROM developers WHERE id = $1", [developerId]);

    if (result.rows.length === 0) {
      return res.status(404).send("Developer not found");
    }
    const developer = result.rows[0];
    res.render("singleDeveloper", { developer });
  } catch (error) {
    console.error("Error fetching game", error);
    res.status(500).send("Server Error");
  }
};

const editSingleDeveloper = (req, res) => {
  const developerId = req.params.id;
  res.send(`This will edit Developer with ID: ${developerId}`);
};

const deleteSingleDeveloper = (req, res) => {
  const developerId = req.params.id;
  res.send(`This will delete Developer with ID: ${developerId}`);
};

module.exports = {
  getAllDevelopers,
  createDeveloperGet,
  createDeveloperPost,
  getSingleDeveloper,
  editSingleDeveloper,
  deleteSingleDeveloper,
};
