const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.options('*', cors())

const corsOptions = {
  "origin": "*",
  "credentials": "true",
  "Access-Control-Allow-Origin": "*"
}
app.use(cors(corsOptions));

// Requires models folder for syncing
var db = require("./models")


app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
});
// Set up express app to handle data parsing
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
})
// app.options('*', cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static Directory
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API Route
app.use(routes);

//Sync sequelize models and start the Express app

db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
  });
});
