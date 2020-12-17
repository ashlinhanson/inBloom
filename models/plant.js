
module.exports = function(sequelize, DataTypes) {
  let Plant = sequelize.define("Plant", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
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
    image_url: {
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