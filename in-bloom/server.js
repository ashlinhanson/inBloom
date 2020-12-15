const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

// Requires models folder for syncing
var db = require("./models")

// Set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Directory
app.use(express.static("public"));

// API Route

require("./routes/api-routes");

//Sync sequelize models and start the Express app

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
  });
});
