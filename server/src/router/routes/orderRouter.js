const { Router } = require('express');
const orderRouter = Router();

//handlers
const { getAllOrders } = require('../../handlers');

orderRouter.get('/', getAllOrders);

module.exports = orderRouter;
