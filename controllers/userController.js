const db = require("../models");

module.exports = {

  findAll: function(req, res) {
    db.User.findAll({})
      .then(function(dbModel) {
        res.json(dbModel);
      });
  }
}

  // create: function(app) {
  // app.post("/api/user", function(req, res) {
  //   db.User.create(req.body) 
  //     .then(function(dbUser) {
  //       res.json(dbUser);
  //     });
  //   });
  // }

