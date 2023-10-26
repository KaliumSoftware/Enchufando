const { Router } = require('express');
const orderRouter = Router();

//handlers
const {
  getAllOrders,
  getAllUserOrders,
  postOrder
} = require('../../handlers');

orderRouter.get('/', getAllOrders);
orderRouter.get('/:userId', getAllUserOrders);

orderRouter.post('/', postOrder);

module.exports = orderRouter;
