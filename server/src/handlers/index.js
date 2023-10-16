//users
const getAllUsers = require('../handlers/userHandlers/readUsers/getAllUsers');
const getUserById = require('../handlers/userHandlers/readUsers/getUserById');
const createUser = require('../handlers/userHandlers/createUsers/createUser');
const updateUser = require('./../handlers/userHandlers/updateUsers/updateUser');
const loginUser = require('./../handlers/userHandlers/createUsers/loginUser');
const deleteUsers = require('./../handlers/userHandlers/deleteUsers/deleteUsers');
//orders
const getAllOrders = require('../handlers/orderHandlers/readOrders/getAllOrders');
//products
const getAllProducts = require('../handlers/productHandlers/readProducts/getAllProducts');
const getAllMeasures = require('../handlers/productHandlers/readProducts/getAllMeaures');
const getProductById = require('../handlers/productHandlers/readProducts/getProductById');
const postProduct = require('../handlers/productHandlers/createProducts/postProduct');
const handleProductDelete = require('../handlers/productHandlers/handleDeleteProduct');
//codes
const getAllCodes = require('../handlers/codesHandlers/readCodes/getCodes');
const postCodes = require('../handlers/codesHandlers/createCodes/postCodes');
module.exports = {
  //users
  getAllUsers,
  createUser,
  getUserById,
  loginUser,
  updateUser,
  deleteUsers,

  //orders
  getAllOrders,

  //products
  getAllMeasures,
  getAllProducts,
  postProduct,
  getProductById,
  handleProductDelete,

  //codes
  getAllCodes,
  postCodes
};
