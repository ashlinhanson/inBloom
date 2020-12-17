const router = require("express").Router();
const dbController = require("../../controllers/trefleController");

router.route("/search/:plantName")
  .get(trefleController.searchPlants);

router.route("/garden")
  .get(trefleController.listPlants)
  
router.route("/plant/:id")
  .get(trefleController.plantDetail)
  
module.exports = router;