//users
const findAllUsers = require('./userControllers/readUsers/findAllUsers');
const createUserContr = require('./userControllers/createUsers/createUserContr');
const findUserById = require('./userControllers/readUsers/findUserById');
const updateUserById = require('./userControllers/updateUsers/updateUserById');
const compareUser = require('./userControllers/createUsers/compareUser');
const deleteUser = require('./userControllers/deleteUsers/deleteUser');
//orders
const findAllOrders = require('./orderControllers/readOrders/findAllOrders');
const createOrder = require('./orderControllers/createOrders/createOrder');
//products
const findAllProducts = require('./productControllers/readProducts/findAllProducts');
const findAllMeasures = require('./productControllers/readProducts/findAllMeasures');
const findProductByPk = require('./productControllers/readProducts/findProductByPk');
const createProduct = require('./productControllers/createProducts/createProduct');

module.exports = {
  //users
  findAllUsers,
  createUserContr,
  updateUserById,
  findUserById,
  compareUser,
  deleteUser,
  //orders
  findAllOrders,
  createOrder,
  //products
  createProduct,
  findAllProducts,
  findProductByPk,
  findAllMeasures
};
