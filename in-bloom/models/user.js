
module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("User", {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
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
        type: DataTypes.ARRAY,
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