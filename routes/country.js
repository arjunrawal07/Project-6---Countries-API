const express = require("express");
const router = express.Router();
const countryController = require("../controller/Countries");

router.get("/countries", countryController.index);

module.exports = router;
