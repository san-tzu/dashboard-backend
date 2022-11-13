const express = require("express");
const router = express.Router();

const travelController = require("../controllers/travelControllers");

router
  .route("/")
  .get(travelController.getAllTravels)
  .post(travelController.createTravel);

module.exports = router;
