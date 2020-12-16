const db = require("../models");

module.exports = {

  findAll: function(req, res) {
    db.User.findAll({})
      .then(function(dbModel) {
        res.json(dbModel);
      });
  },

  findById: function(req, res) {
    db.User.find({
      where: {
        id: req.params
      }
    }).then(function(dbModel) {
        res.json(dbModel);
    });
  },

  create: function(req, res) {
    db.User.create(req.body) 
      .then(function(dbModel) {
        res.json(dbModel);
      });
  }
}

 
