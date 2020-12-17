const db = require("../models");

module.exports = {

  findByEmail: function(req, res) {
    db.User.findOne({
      where: {
        email: req.params.email
      }
    })
      .then(function(dbModel) {
        res.json(dbModel);
    });
  },

  create: function(req, res) {
    db.User.create(req.body) 
      .then(function(dbModel) {
        res.json(dbModel);
      });
  },

  remove: function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbModel) {
        res.json("Removed " + dbModel + " from database")
      });
  }
}

 
