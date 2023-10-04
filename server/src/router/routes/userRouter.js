const { Router } = require('express');
const userRouter = Router();
// handlers
const {
  getAllUsers,
  createUser,
  getUserById
} = require('../../handlers');

//read
userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
//create
userRouter.post('/', createUser);

module.exports = userRouter;
