const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const cors = require("cors")
const corsOptions = {
  "origin": ["https://localhost:3000", "https://localhost:3001"],
  "credentials": "true",
  "Access-Control-Allow-Origin": ["https://localhost:3000", "https://localhost:3001"]
}
router.all('*', cors(corsOptions));
// API Routes
router.use("/api", apiRoutes);

// Sends React app if no API routes are hit
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;