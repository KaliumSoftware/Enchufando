//users
const findAllUsers = require('./userControllers/readUsers/findAllUsers');
const createUserContr = require('./userControllers/createUsers/createUserContr');
const findUserById = require('./userControllers/readUsers/findUserById');
//orders
const findAllOrders = require('./orderControllers/readOrders/findAllOrders');
//products
const findAllProducts = require('./productControllers/readProducts/findAllProducts');
const findProductByPk = require('./productControllers/readProducts/findProductByPk');
const createProduct = require('./productControllers/createProducts/createProduct');

module.exports = {
  findAllUsers,
  createUserContr,
  findUserById,
  findAllOrders,
  createProduct,
  findAllProducts,
  findProductByPk
};
