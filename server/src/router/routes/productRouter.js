const { Router } = require('express');
const fileUpload = require('express-fileupload');
const isLogged = require('../../middlewares/isLogged');
const authAdminMiddleware = require('../../middlewares/authAdminMiddleware');
const {
  getAllProducts,
  postProduct,
  postAllProducts,
  getProductById,
  getAllMeasures,
  handleProductDelete,
  handleIsActive,
  handlePutProduct
} = require('../../handlers');

const productRouter = Router();

productRouter.get('/', getAllProducts);
productRouter.get('/measures', getAllMeasures);
productRouter.get('/:id', authAdminMiddleware(getProductById));

// productRouter.post('/all', postAllProducts);
productRouter.post(
  '/',
  fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
  }),
  postProduct
);

productRouter.patch('/:id', handleIsActive);
productRouter.put('/:id', handlePutProduct);
productRouter.delete('/:id', handleProductDelete);

module.exports = productRouter;
