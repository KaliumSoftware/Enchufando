//users
const findAllUsers = require('./userControllers/readUsers/findAllUsers');
const createUserContr = require('./userControllers/createUsers/createUserContr');
const findUserById = require('./userControllers/readUsers/findUserById');
const updateUserById = require('./userControllers/updateUsers/updateUserById');

//orders
const findAllOrders = require('./orderControllers/readOrders/findAllOrders');
const createOrder = require('./orderControllers/createOrders/createOrder');
//products
const findAllProducts = require('./productControllers/readProducts/findAllProducts');
const findProductByPk = require('./productControllers/readProducts/findProductByPk');
const createProduct = require('./productControllers/createProducts/createProduct');

module.exports = {
  //users
  findAllUsers,
  createUserContr,
  updateUserById,
  findUserById,
  //orders
  findAllOrders,
  createOrder,
  //products
  createProduct,
  findAllProducts,
  findProductByPk

};
