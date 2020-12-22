const db = require("../models");

module.exports = {

  findById: function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbModel) {
        res.json(dbModel);
    });
  },

  create: function(req, res) {
    // in future, authenticate with google here for server side authentication

    db.User.findOne({
      where: {
        googleId: req.body.googleId
      }
    })
      .then(function(dbModel) {
        if(dbModel){
          res.json(dbModel);
        }
        else {
          db.User.create({
            googleId: req.body.googleId,
            firstName: req.body.givenName,
            lastName: req.body.familyName,
            email: req.body.email
          }) 
            .then(function(dbModel) {
              res.json(dbModel);
          });
        }
      })
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

 
