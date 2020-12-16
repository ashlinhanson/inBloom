
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define("User", {

    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    plants: {
      type: DataTypes.JSON,
      allowNull: true
    }

  });

  User.associate = function(models) {
      User.hasMany(models.Plant, {
          onDelete: "cascade"
      });
  };
  return User;
};