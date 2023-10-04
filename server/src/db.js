const { Sequelize } = require('sequelize');
const defineOrderModel = require('./models/Order');
const defineProductModel = require('./models/Product.js');
const defineUserModel = require('./models/User.js');
require('dotenv').config();

// Crear instancia de Sequelize
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false
  }
);

// Definir modelos
const User = defineUserModel(sequelize);
const Order = defineOrderModel(sequelize);
const Product = defineProductModel(sequelize);

// Exportar modelos y conexión
module.exports = { User, Order, Product, sequelize };
