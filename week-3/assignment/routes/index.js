const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Hello, My Server!</h1>");
});

router.get("/getData", (req, res) => {
  const number = req.query.number;
  const parsed = parseInt(number);
  if (number == null) {
    res.send("<h1>Lack of Parameter</h1>");
  } else if (isNaN(parsed)) {
    res.send("<h1>Wrong Parameter</h1>");
  }

  let ans = 0;
  for (i = 1; i <= parsed; i++) {
    ans += i;
  }
  let num = String(ans);
  res.send({ number: num });
});

module.exports = router;
