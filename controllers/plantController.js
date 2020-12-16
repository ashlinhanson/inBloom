const db = require("../models");

module.exports = {

  create: function(req, res) {
    db.Plant.create(req.body) 
      .then(function(dbModel) {
        res.json(dbModel);
      });
  }

};
