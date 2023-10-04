//users handlers
const findAllUsers = require('./userControllers/readUsers/findAllUsers');
const createUserContr = require('./userControllers/createUsers/createUserContr');
const findUserById = require('./userControllers/readUsers/findUserById');
//orders handlers
const findAllOrders = require('./orderControllers/readOrders/findAllOrders');

module.exports = {
  findAllUsers,
  createUserContr,
  findUserById,
  findAllOrders
};
