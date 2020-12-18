const router = require("express").Router();
const plantController = require("../../controllers/plantController");

router.route("/")
  .post(plantController.create);

router.route("/:id")
  .get(plantController.findById)
  .delete(plantController.remove);
  
  module.exports = router;