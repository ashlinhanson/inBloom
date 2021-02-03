
module.exports = function(sequelize, DataTypes) {
  let Plant = sequelize.define("Plant", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    common_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    phmin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    phmax: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    light: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    bloommonths: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    growthmonths: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    humidity: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    minwater: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    maxwater: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rootdepth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mintemp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    maxtemp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    soilnutriments: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    soilsalinity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    soiltexture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    soilhumidity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    trefle_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW
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