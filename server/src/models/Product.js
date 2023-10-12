const { DataTypes, Model } = require('sequelize');

module.exports = function defineProductModel(sequelize) {
  class Product extends Model {
    static associate(models) {
      // Definir asociaciones aquí
      Product.belongsToMany(models.Order, {
        through: 'OrderProduct',
        timestamps: false
      });
    }
  }

  Product.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      // specifications: [{code: 50015, size:1/2, smallPack:100, bigPack:1200, price:358,93},{code: 50018, size:1/4, smallPack:200, bigPack:1500, price:499,93}]
      specifications: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false
      },
      type: {
        type: DataTypes.ENUM,
        values: ['ROSCADO', 'ESPIGA', 'KRONA']
      },
      category: {
        type: DataTypes.STRING
      },
      image: {
        type: DataTypes.JSON,
        allowNull: false,
        validate: {
          validateFormat(value) {
            if (!value.url) {
              throw new Error(
                'The "image" object must have "url" property.'
              );
            }

            const imageUrlRegex =
              /^(https?:\/\/)?[\w.-]+\.[a-zA-Z]{2,}(\/\S*)?$/;
            if (!imageUrlRegex.test(value.url)) {
              throw new Error(
                "The 'url' property does not meet the required format"
              );
            }
          }
        }
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    },
    { sequelize, modelName: 'Product' }
  );
  return Product;
};
