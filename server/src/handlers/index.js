//read
const getAllUsers = require('../handlers/userHandlers/readUsers/getAllUsers');
const getUserById = require('../handlers/userHandlers/readUsers/getUserById');
//create
const createUser = require('../handlers/userHandlers/createUsers/createUser');

module.exports = {
  getAllUsers,
  createUser,
  getUserById
};
