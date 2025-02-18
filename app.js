const express = require("express");
const app = express();
const path = require("node:path");

const gameRoutes = require("./routes/gameRoutes");
const developerRoutes = require("./routes/developerRoutes");
const genreRoutes = require("./routes/genreRoutes");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app.use(express.urlencoded({ extended: true }));

app.use("/games", gameRoutes);
app.use("/developers", developerRoutes);
app.use("/genres", genreRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Inventory App - listening on port ${PORT}`);
});
