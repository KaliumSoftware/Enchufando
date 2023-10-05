const { Router } = require('express');
const { postProduct } = require('../../handlers');

const productRouter = Router();

productRouter.post('/', postProduct);

module.exports = productRouter;
