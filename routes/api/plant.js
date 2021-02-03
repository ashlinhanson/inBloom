const router = require("express").Router();
const plantsController = require("../../controllers/plantController");

router.route("/")
  .post(plantsController.create);

router.route("/:id")
  .get(plantsController.findById)
  .delete(plantsController.remove)
  .put(plantsController.update);
  
  
  module.exports = router;