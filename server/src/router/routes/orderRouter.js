const { Router } = require('express');

const orderRouter = Router();

orderRouter.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

module.exports = orderRouter;
