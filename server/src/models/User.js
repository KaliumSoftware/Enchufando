const { DataTypes, Model } = require('sequelize');

module.exports = function defineUserModel(sequelize) {
  class User extends Model {
    static associate(models) {
      // Definir asociaciones aquí
      User.belongsToMany(models.Order, {
        through: 'OrderUser',
        timestamps: false
      });
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { sequelize, modelName: 'User' }
  );
  return User;
};
