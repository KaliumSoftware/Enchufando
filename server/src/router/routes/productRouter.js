const { Router } = require('express');
const {
  getAllProducts,
  postProduct,
  getProductById,
  getAllMeasures,
  handleProductDelete,
  handleIsActive
} = require('../../handlers');

const productRouter = Router();

productRouter.get('/', getAllProducts);
productRouter.get('/measures', getAllMeasures);
productRouter.get('/:id', getProductById);
productRouter.post('/', postProduct);
productRouter.patch('/:id', handleIsActive);
productRouter.delete('/:id', handleProductDelete);

module.exports = productRouter;
