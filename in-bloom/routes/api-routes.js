const db = require("../models/");
console.log("API Route");
module.exports = function(app) {

  app.get("/api/user", function(req, res) {
    console.log("API GET USER")
    db.User.findAll({})
    .then(function(dbUser) {
      console.log("response:", dbUser)
      res.json(dbUser);
    })
  })

};
