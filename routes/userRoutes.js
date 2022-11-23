const express = require("express");
const router = express.Router();

const userController = require("../controllers/userControllers");

router.route("/").get(userController.getAllUsers);

router
  .route("/:id")
  .get(userController.getOneUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
