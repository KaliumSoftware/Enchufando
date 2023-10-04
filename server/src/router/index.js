const { Router } = require('express');
const {
  orderRouter,
  productRouter,
  userRouter
} = require('./routes');

const router = Router();

router.use('/api/order', orderRouter);

router.use('/api/product', productRouter);

router.use('/api/user', userRouter);

module.exports = router;
