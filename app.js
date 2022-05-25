const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

//requst handling
app.get("/", (req, res) => {
  // // console.log(__dirname);
  // res.sendFile(__dirname + "/index.html");
  // // let Jack = {
  // //   name: "Jack Dia",
  // //   age: 25,
  // // };
  // // res.send(Jack);
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/Jack", (req, res) => {
  // res.send("I'm JackDIA.");
  res.status(302);
  res.sendFile(path.join(__dirname, "move.html"));
});

// app.get("/Rae", (req, res) => {
//   res.send("You're Rae.");
// });

app.get("/people/:someOne", (req, res) => {
  // res.send(`<h1> You're looking for ${req.params.someOne} .<h1> `);
  let { someOne } = req.params;
  res.send(`<h1> You're looking for ${someOne} .<h1> `);
});

app.post("/formHandling", (req, res) => {
  let { fullName, age } = req.body;
  res.send(`Thank for ${fullName} posting ,and your age is ${age}.`);
});

app.get("/formHandling2", (req, res) => {
  let { fullName, age } = req.query;
  res.send(`Thank for ${fullName} posting ,and your age is ${age}.`);
});

// reouting for all
app.get("*", (req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, "error.html"));
});

app.listen(3000, () => {
  console.log("Server is reunning in port 3000.");
});
