const express = require("express");
const gameController = require("../controllers/gameController");
const router = express.Router();

// NOT SURE IF ROUTE/METHOD NEEDED
router.get("/", gameController.getGames);

router.post("/", gameController.createGame);

module.exports = router;
