const getAllDevelopers = (req, res) => {
  res.send("This is for all Developers");
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
