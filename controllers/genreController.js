const getAllGenres = (req, res) => {
  res.send("This is for all Genres");
};

const createGenreGet = (req, res) => {
  res.send("This will take me to the Genre Create Form");
};

const createGenrePost = (req, res) => {
  res.send("This should post the new Genre");
};

const getSingleGenre = (req, res) => {
  const genreId = req.params.id;
  res.send(`This is for Genre with  ID: ${genreId}`);
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
