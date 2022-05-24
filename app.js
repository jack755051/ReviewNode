const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("YOU ARE A HOME PAGE.");
});

app.listen(3000, () => {
  console.log("Server is reunning in port 3000.");
});
