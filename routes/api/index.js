const router = require("express").Router();
const userRoutes = require("./user");
const plantRoutes = require("./plant")
const trefleRoutes = require("./trefle")

router.use("/user", userRoutes)
router.use("/plant", plantRoutes);
router.use("/trefle", trefleRoutes);
module.exports = router