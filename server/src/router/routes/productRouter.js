const { Router } = require('express');
const {
  getAllProducts,
  postProduct,
  getProductById,
  getAllMeasures,
  handleProductDelete,
  handleIsActive,
  handlePutProduct
} = require('../../handlers');

const productRouter = Router();

productRouter.get('/', getAllProducts);
productRouter.get('/measures', getAllMeasures);
productRouter.get('/:id', getProductById);
productRouter.post('/', postProduct);
productRouter.patch('/:id', handleIsActive);
productRouter.put('/:id', handlePutProduct);
productRouter.delete('/:id', handleProductDelete);

module.exports = productRouter;
