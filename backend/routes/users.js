const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();


// Get dummy user at start of game
router.get('/', userController.getUser);

// Create user - NOT DONE
router.post('/', userController.createUser);

router.get('/stats/:id', userController.getLifeTimeStatistics)

module.exports = router;