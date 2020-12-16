const express = require("express");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Requires models folder for syncing
var db = require("./models")

// Set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static Directory
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API Route
app.use(routes);

//Sync sequelize models and start the Express app

db.sequelize.sync({ force: true }).then(function() {
  require("./controller/plantsController.js")(app)
  app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
  });
});
