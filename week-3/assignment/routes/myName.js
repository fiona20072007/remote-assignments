const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render("index", { name });
  } else {
    res.render("hello");
  }
});

router.post("/trackName", (req, res) => {
  const name = req.cookies.username;
  res.cookie("username", req.body.username);
  res.redirect("/myName");
});
//如果用get就是拿req.query.username
//如果用post就是拿req.body.username

router.post("/", (req, res) => {
  res.clearCookie("username");
  res.redirect("/myName");
});

module.exports = router;
