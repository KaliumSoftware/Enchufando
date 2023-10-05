const { Router } = require('express');
const userRouter = Router();
// handlers
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser
} = require('../../handlers');

//read
userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
//create
userRouter.post('/', createUser);
//update
userRouter.put('/:id', updateUser);

module.exports = userRouter;
