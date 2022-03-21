const express = require("express");
const resultController = require('../controllers/resultController');
const router = express.Router();


router.get('/', resultController.demoGreeting);

module.exports = router;