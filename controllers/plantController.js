const db = require("../models");

module.exports = {

  create: function(req, res) {
    console.log("This is the req " + req);
    db.Plant.create(req.body) 
      .then(function(dbModel) {
        res.json(dbModel);
      });
  },

  findById: function(req, res) {
    db.Plant.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbModel) {
        res.json(dbModel);
      });
  },

  remove: function(req, res) {
    console.log(req);
    db.Plant.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbModel) {
        console.log("This is the dbModel" + dbModel);
        res.json(dbModel);
      });
  }

}
