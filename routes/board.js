const express = require("express");
const db = require("../data/mongodbConfig");
const mongodb = require("mongodb");
const router = express.Router();
const ObjectId = mongodb.ObjectId; // _id 객체화

const historyBack = () => {
  history.back();
};

router.get("/boardList", async function (req, res) {
  const postData = await db
    .getDb()
    .collection("board")
    .find({})
    .project({ title: 1, name: 1, date: 1, ip: 1, date: 1 })
    .toArray();

  res.render("board/boardList", { postData: postData });
});

router.get("/boardCreate", function (req, res) {
  res.render("board/boardCreate");
});

router.post("/newPost", async function (req, res) {
  try {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const newPostData = {
      title: req.body.title,
      name: req.body.name,
      password: req.body.password,
      body: req.body.content,
      date: new Date(),
      ip: ip,
    };

    const result = await db.getDb().collection("board").insertOne(newPostData);
    res.redirect("/boardList");
  } catch (err) {
    console.log(err);
  }
});

router.get("/board/:id", async function (req, res) {
  const postId = new ObjectId(req.params.id);
  const postData = await db
    .getDb()
    .collection("board")
    .findOne({ _id: postId }, { password: 0 });
  const time = postData.date.toLocaleTimeString("ko-KR", {
    hour: "numeric",
    minute: "numeric",
  });
  postData.dateForHuman =
    postData.date.toLocaleDateString("ko-KR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }) +
    "  " +
    time;
  postData.date = postData.date.toISOString();
  res.render("board/boardDetail", { postData: postData });
});
router.post("/board/:id/delete", async function (req, res) {
  const postId = new ObjectId(req.params.id);

  try {
    const postData = await db
      .getDb()
      .collection("board")
      .findOne({ _id: postId });
    if (postData.password === req.body.passwordInput) {
      const result = await db
        .getDb()
        .collection("board")
        .deleteOne({ _id: postId });

      res.redirect("/boardList");
    } else {
      res.render("board/boardDetail", { postData: postData });
      console.log("패스워드가 틀렸습니다.");
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/board/:id/edit", async function (req, res) {
  const postId = new ObjectId(req.params.id);
  const postData = await db
    .getDb()
    .collection("board")
    .findOne({ _id: postId }, { password: 0, name: 0, ip: 0 });
  res.render("board/boardUpdate", { postData: postData });
});

router.post("/board/:id/update", async function (req, res) {
  const postId = new ObjectId(req.params.id);
  const update = req.body;
  const password = req.body.password;

  try {
    const postData = await db
      .getDb()
      .collection("board")
      .findOne({ _id: postId }, { name: 0, ip: 0 });
    if (password === postData.password) {
      const result = await db
        .getDb()
        .collection("board")
        .updateOne(
          { _id: postId },
          {
            $set: {
              title: update.title,
              body: update.content,
              date: new Date(),
            },
          }
        );
      res.redirect("/boardList");
    } else {
      console.log("패스워드가 틀렸습니다.");
      res.render("board/boardUpdate", { postData: postData });
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
