const router = require("express").Router();

router.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
});

const trefleController = require("../../controllers/trefleController");

router.route("/search/:plantName")
  .get(trefleController.searchPlants);

router.route("/detail/:id")
  .get(trefleController.plantDetail);
  
module.exports = router;