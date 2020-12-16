
module.exports = function(sequelize, DataTypes) {
  let Plant = sequelize.define("Plant", {
    
    common_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    scientific_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //main_species.edible
    edible: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    //main_species.distribution.native
    native: {
      type: DataTypes.JSON,
      allowNull: true
    },
    //main_species.flower.color
    color: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //main_species.specifications.growth_form
    growth_form: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //main_species.specifications.growth_habit
    growth_habit: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //main_species.specifications.growth_rate
    growth_rate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //main_species.specifications.average_height.cm
    avg_cm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    //main_species.specifications.maximum_height.cm
    max_cm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    //main_species.specifications.toxicity
    toxicity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //main_species.growth.ph_maximum
    ph_maximum: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //main_species.growth.ph_minimum
    ph_minimum: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //main_species.growth.bloom_months
    bloom_months: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //main_species.growth.light
    light: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //main_species.growth.growth_months
    growth_months: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //main_species.growth.atmospheric_humidity
    atmospheric_humidity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //main_species.growth.minimum_precipitation
    minimum_precipitation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //main_species.growth.maximum_precipitation
    maximum_precipitation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //main_species.growth.minimum_root_depth
    minimum_root_depth: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //main_species.growth.minimum_temperature
    minimum_temperature: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //main_species.growth.maximum_temperature
    maximum_temperature: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //main_species.growth.soil_nutriments
    soil_nutriments: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //main_species.growth.soil_salinity
    soil_salinity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //main_species.growth.soil_texture
    soil_texture: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //main_species.growth.soil_humidity
    soil_humidity: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  Plant.associate = function(models) {
    Plant.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Plant;
};