//users
const getAllUsers = require('../handlers/userHandlers/readUsers/getAllUsers');
const getUserById = require('../handlers/userHandlers/readUsers/getUserById');
const createUser = require('../handlers/userHandlers/createUsers/createUser');
const updateUser = require('./../handlers/userHandlers/updateUsers/updateUser');
//orders
const getAllOrders = require('../handlers/orderHandlers/readOrders/getAllOrders');
//products
const getAllProducts = require('../handlers/productHandlers/readProducts/getAllProducts');
const getProductById = require('../handlers/productHandlers/readProducts/getProductById');
const postProduct = require('../handlers/productHandlers/createProducts/postProduct');

module.exports = {
  //users
  getAllUsers,
  createUser,
  getUserById,
   updateUser,
  //orders
  getAllOrders,
  //products
  getAllProducts,
  postProduct,
  getProductById
};
