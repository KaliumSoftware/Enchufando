//users
const getAllUsers = require('../handlers/userHandlers/readUsers/getAllUsers');
const getUserById = require('../handlers/userHandlers/readUsers/getUserById');
const createUser = require('../handlers/userHandlers/createUsers/createUser');
const updateUser = require('./../handlers/userHandlers/updateUsers/updateUser');
const loginUser = require('./../handlers/userHandlers/createUsers/loginUser');
//orders
const getAllOrders = require('../handlers/orderHandlers/readOrders/getAllOrders');
//products
const getAllProducts = require('../handlers/productHandlers/readProducts/getAllProducts');
const getAllMeasures = require('../handlers/productHandlers/readProducts/getAllMeaures');
const getProductById = require('../handlers/productHandlers/readProducts/getProductById');
const postProduct = require('../handlers/productHandlers/createProducts/postProduct');

module.exports = {
  //users
  getAllUsers,
  createUser,
  getUserById,
  
  //orders
  getAllOrders,
  
  //products
  getAllMeasures,
  updateUser,
  loginUser,
  postProduct,
  getProductById
};
