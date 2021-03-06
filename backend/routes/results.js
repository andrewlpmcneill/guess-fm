const express = require("express");
const resultController = require("../controllers/resultController");
const router = express.Router();

router.get("/", resultController.getResults);

router.patch('/', resultController.updateResults);
router.post("/", resultController.createResult);

module.exports = router;
