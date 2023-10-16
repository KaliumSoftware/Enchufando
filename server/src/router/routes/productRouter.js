const { Router } = require('express');
const {
  getAllProducts,
  postProduct,
  getProductById,
  getAllMeasures,
  handleProductDelete
} = require('../../handlers');

const productRouter = Router();

productRouter.get('/', getAllProducts);
productRouter.get('/measures', getAllMeasures);
productRouter.get('/:id', getProductById);
productRouter.post('/', postProduct);
productRouter.delete('/:id', handleProductDelete);

module.exports = productRouter;
