const router = require("express").Router();
const dbController = require("../../controllers/dbController");

router.route("/")
  .post(dbController.create);

router.route("/:id")
  .get(dbController.findById)
  .delete(dbController.remove);
  
  module.exports = router;