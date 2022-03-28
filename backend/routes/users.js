const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

// Get dummy user at start of game
router.get("/", userController.getUsers);

// Create user - NOT DONE
router.post("/", userController.createUser);

//Get users life time game statistics
router.get("/stats/:id", userController.getLifeTimeStatistics);

module.exports = router;
