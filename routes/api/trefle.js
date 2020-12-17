const router = require("express").Router();
const trefleController = require("../../controllers/trefleController");

router.route("/search/:plantName")
  .get(trefleController.searchPlants);

router.route("/plant/:id")
  .get(trefleController.plantDetail)
  
module.exports = router;