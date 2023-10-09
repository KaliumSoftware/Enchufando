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
      // medidas: [{medida:1/2, bolsita:100, bolson:1200},{medida:1/4, bolsita:100, bolson:1200}]
      packaging: {
        type: DataTypes.STRING,
        allowNull: false
      },
      measure: {
        type: DataTypes.STRING,
        allowNull: false
      },
      code: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      type: {
        type: DataTypes.ENUM,
        values: ['roscados', 'riego']
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
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { sequelize, modelName: 'Product' }
  );
  return Product;
};
