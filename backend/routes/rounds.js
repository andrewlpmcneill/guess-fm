const express = require("express");
const roundController = require('../controllers/roundController');
const router = express.Router();


router.patch('/', roundController.updateRounds);

router.post('/', roundController.newRound)

module.exports = router;