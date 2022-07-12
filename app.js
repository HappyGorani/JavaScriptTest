const express = require("express");
const path = require("path");
const fs = require("fs");
const { render } = require("ejs");
const app = express();
const boardRoutes = require("./routes/board");
const memoFilePath = path.join(__dirname, "data", "memos.json");
const db = require("./data/mongodbConfig")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(boardRoutes);

////////////////////////////////////////////////
app.get("/", function (req, res) {
  res.render("index");
});
app.get("/memo", function (req, res) {
  const memo = req.body;
  const memoData = fs.readFileSync(memoFilePath);
  const saveMemo = JSON.parse(memoData);
  res.render("memo", { memos: saveMemo });
});
app.post("/memo", function (req, res) {
  const memo = req.body;
  const memoData = fs.readFileSync(memoFilePath);
  const saveMemo = JSON.parse(memoData);
  saveMemo.push(memo);
  fs.writeFileSync(memoFilePath, JSON.stringify(saveMemo));
  res.redirect("/memo");
});

app.post("/delete", function (req, res) {
  const memoData = fs.readFileSync(memoFilePath);
  fs.writeFileSync(memoFilePath, JSON.stringify([]));
  res.redirect("/memo");
});

db.connectToDatabase().then(function(){
  app.listen(3000, "0.0.0.0");

})
