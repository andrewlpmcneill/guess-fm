const express = require("express");
const stationController = require("../controllers/stationController");
const router = express.Router();

//gets random stations
router.get("/", stationController.randomStations);

//route to handle error mp3 links
router.post("/no-source", stationController.replaceStation);

module.exports = router;
