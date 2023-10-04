const { Router } = require('express');
const postProduct = require('../../handlers/productHandlers/postProduct');

const productRouter = Router();

productRouter.post('/', postProduct);

module.exports = productRouter;
