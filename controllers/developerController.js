const developers = [
  {
    id: 1,
    name: "Rockstar",
    founded: 1998,
    games: "Harcoded - GTA5, RDR2",
  },
  {
    id: 2,
    name: "Larian Studios",
    founded: 1996,
    games: "Baldurs Gate 3",
  },
  {
    id: 3,
    name: "FromSoftware",
    founded: 1986,
    games: "Elden Ring",
  },
  {
    id: 4,
    name: "Warhorse Studios",
    founded: 2011,
    games: "Kingdom Come Deliverance 2",
  },
];

const getAllDevelopers = (req, res) => {
  res.render("developers", { developers: developers });
};

const createDeveloperGet = (req, res) => {
  res.send("This will take me to the Developer Create Form");
};

const createDeveloperPost = (req, res) => {
  res.send("This should post the new Developer");
};

const getSingleDeveloper = (req, res) => {
  const developerId = req.params.id;
  res.send(`This is for Developer with  ID: ${developerId}`);
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
