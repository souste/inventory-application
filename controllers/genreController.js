const genres = [
  {
    id: 1,
    name: "Fantasy",
    description: "Sword and Sorcery",
    games: "Hardcoded - Elden Ring, Baldurs Gate",
  },
  {
    id: 2,
    name: "Open World",
    description: "With world map, can go anywhere",
    games: "Hardcoded - Elden Ring, Baldurs Gate, Grand Theft Auto 6",
  },
  {
    id: 3,
    name: "Driving",
    description: "Car games",
    games: "Grand Theft Auto 6",
  },
  {
    id: 4,
    name: "Action",
    description: "Hacking and Slashing",
    games: "Grand Theft Auto 6, Elden Ring",
  },
];

const getAllGenres = (req, res) => {
  res.render("genres", { genres: genres });
};

const createGenreGet = (req, res) => {
  res.send("This will take me to the Genre Create Form");
};

const createGenrePost = (req, res) => {
  res.send("This should post the new Genre");
};

const getSingleGenre = (req, res) => {
  const genreId = req.params.id;
  const genre = genres[genreId];
  res.render("singleGenre", { genre: genre });
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
