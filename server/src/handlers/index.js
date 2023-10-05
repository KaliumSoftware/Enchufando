//users
const getAllUsers = require('../handlers/userHandlers/readUsers/getAllUsers');
const getUserById = require('../handlers/userHandlers/readUsers/getUserById');
const createUser = require('../handlers/userHandlers/createUsers/createUser');
//orders
const getAllOrders = require('../handlers/orderHandlers/readOrders/getAllOrders');
//products
const getAllProducts = require('../handlers/productHandlers/readProducts/getAllProducts');
const getProductById = require('../handlers/productHandlers/readProducts/getProductById');
const postProduct = require('../handlers/productHandlers/createProducts/postProduct');

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  getAllOrders,
  getAllProducts,
  postProduct,
  getProductById
};
