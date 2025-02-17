const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Why hello there"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Inventory App - listening on port ${PORT}`);
});
