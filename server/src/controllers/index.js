//users
const findAllUsers = require('./userControllers/readUsers/findAllUsers');
const createUserContr = require('./userControllers/createUsers/createUserContr');
const findUserById = require('./userControllers/readUsers/findUserById');
const updateUserById = require('./userControllers/updateUsers/updateUserById');
//orders
const findAllOrders = require('./orderControllers/readOrders/findAllOrders');

module.exports = {
  findAllUsers,
  createUserContr,
  findUserById,
  findAllOrders,
  updateUserById
};
