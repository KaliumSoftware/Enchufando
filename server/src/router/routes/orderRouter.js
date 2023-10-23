const { Router } = require('express');
const orderRouter = Router();

//handlers
const { getAllOrders, postOrder } = require('../../handlers');

orderRouter.get('/', getAllOrders);
orderRouter.post('/', postOrder);

module.exports = orderRouter;
