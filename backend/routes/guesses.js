const express = require("express");
const router = express.Router();


router.get('/',(req, res) => {
  res.json("this is the guesses");
});

module.exports = router;