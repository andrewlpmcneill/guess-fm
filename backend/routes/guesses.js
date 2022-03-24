const express = require("express");
const guessController = require('../controllers/guessController')
const router = express.Router();


router.get('/', guessController.demoGreeting);

router.post('/', guessController.validateAndInsertGuess)

module.exports = router;