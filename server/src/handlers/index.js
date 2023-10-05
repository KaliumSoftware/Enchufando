//users
const getAllUsers = require('../handlers/userHandlers/readUsers/getAllUsers');
const getUserById = require('../handlers/userHandlers/readUsers/getUserById');
const createUser = require('../handlers/userHandlers/createUsers/createUser');
const updateUser = require('./../handlers/userHandlers/updateUsers/updateUser');
//orders
const getAllOrders = require('../handlers/orderHandlers/readOrders/getAllOrders');
//products
const postProduct = require('../handlers/productHandlers/createProducts/postProduct');

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  getAllOrders,
  updateUser,
  postProduct
};
