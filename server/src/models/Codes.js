const { DataTypes, Model } = require('sequelize');

module.exports = function defineCodesModel(sequelize) {
  class Codes extends Model {
    static associate(models) {
      // Definir asociaciones aquí
      Codes.belongsToMany(models.Order, {
        through: 'OrderCodes',
        timestamps: false
      });
    }
  }

  Codes.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      isUsed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      discount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { sequelize, modelName: 'Codes' }
  );
  return Codes;
};
