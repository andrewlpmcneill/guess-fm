const express = require("express");
const resultController = require('../controllers/resultController');
const router = express.Router();


router.patch('/', resultController.updateResults);

module.exports = router;