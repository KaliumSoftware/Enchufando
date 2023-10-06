const { Router } = require('express');
const userRouter = Router();
// handlers
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  loginUser
} = require('../../handlers');

//read
userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
//create
userRouter.post('/', createUser);
userRouter.post('/login', loginUser);
//update
userRouter.put('/:id', updateUser);

module.exports = userRouter;
