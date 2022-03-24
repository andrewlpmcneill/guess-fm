const express = require("express");
const guessController = require("../controllers/guessController");
const router = express.Router();

router.get("/", guessController.getGuesses);

router.post("/", guessController.validateAndInsertGuess);

module.exports = router;
