const { Router } = require('express');
const {
  getAllProducts,
  postProduct,
  getProductById
} = require('../../handlers');

const productRouter = Router();

productRouter.get('/', getAllProducts);
productRouter.get('/:id', getProductById);
productRouter.post('/', postProduct);

module.exports = productRouter;
