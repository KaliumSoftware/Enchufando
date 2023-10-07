const { Router } = require('express');
const {
  getAllProducts,
  postProduct,
  getProductById,
  getAllMeasures
} = require('../../handlers');

const productRouter = Router();

productRouter.get('/', getAllProducts);
productRouter.get('/measures', getAllMeasures);
productRouter.get('/:id', getProductById);
productRouter.post('/', postProduct);

module.exports = productRouter;
