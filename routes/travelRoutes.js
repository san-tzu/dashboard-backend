const express = require("express");
const router = express.Router();

const travelController = require("../controllers/travelControllers");

router
  .route("/")
  .get(travelController.getAllTravels)
  .post(travelController.createTravel);

router
  .route("/:id")
  .get(travelController.getOneTravel)
  // .patch(travelController.updateTravel)
  // .delete(travelController.deleteTravel);

module.exports = router;
