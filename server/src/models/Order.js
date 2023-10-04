const { DataTypes, Model } = require('sequelize');

module.exports = function defineOrderModel(sequelize) {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, {
        through: 'OrderUser',
        timestamps: false
      });
      Order.belongsToMany(models.Product, {
        through: 'OrderProduct',
        timestamps: false
      });
    }
  }

  Order.init(
    {
      id: {
        unique: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      products: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false
      },
      doDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
      },
      deliveryDate: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Order'
    }
  );
  return Order;
};
