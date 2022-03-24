const express = require("express");
const roundController = require('../controllers/roundController');
const router = express.Router();


router.patch('/', roundController.updateRounds);

module.exports = router;