const express = require("express");
const roundController = require('../controllers/roundController')
const router = express.Router();


router.get('/', roundController.demoGreeting);

module.exports = router;