const { Router } = require('express');
const router = Router();
const orderRouter = require('./routes/orderRouter');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
router.use('/api/order', orderRouter);
router.use('/api/product', productRouter);
router.use('/api/user', userRouter);

module.exports = router;
