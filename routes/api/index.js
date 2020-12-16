const router = require("express").Router();
const userRoutes = require("./user");
const plantRoutes = require("./plant")

router.use("/user", userRoutes)
router.use("/plant", plantRoutes);

module.exports = router