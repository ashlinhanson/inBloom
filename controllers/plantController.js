const db = require("../models");

module.exports = {

  create: function(req, res) {
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

  update: function(req, res) {
    db.Plant.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbModel) {

        if (!dbModel) {
          throw new Error ("Not able to update")
        }

        let values = {
          registered: true,
          nickname: req.body.nickname,
          common_name: req.body.common_name,
          phmin: req.body.phmin,
          phmax: req.body.phmax,
          light: req.body.light,
          bloommonths: req.body.bloommonths,
          growthmonths: req.body.growthmonths,
          humidity: req.body.humidity,
          minwater: req.body.minwater,
          maxwater: req.body.maxwater,
          rootdepth: req.body.rootdepth,
          mintemp: req.body.mintemp,
          maxtemp: req.body.maxtemp,
          soilnutriments: req.body.soilnutriments,
          soilsalinity: req.body.soilsalinity,
          soilhumidity: req.body.soilhumidity,
          image_url: req.body.image_url
        }

      dbModel.update(values).then(newDbModel => {
        res.json(newDbModel);
      })
    })
  },

  remove: function(req, res) {
    db.Plant.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbModel) {
        res.json(dbModel);
      });
  }

}
