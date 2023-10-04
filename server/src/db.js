const { Sequelize } = require('sequelize');
const defineOrderModel = require('./models/Order');
const defineProductModel = require('./models/Product.js');
const defineUserModel = require('./models/User.js');
require('dotenv').config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
// Instance of Sequelize
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false
  }
);

// Define models
const User = defineUserModel(sequelize);
const Order = defineOrderModel(sequelize);
const Product = defineProductModel(sequelize);

// Export models and connection
module.exports = { User, Order, Product, sequelize };
