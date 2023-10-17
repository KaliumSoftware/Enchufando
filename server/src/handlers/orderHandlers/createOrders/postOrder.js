const createOrder = require('../../../controllers');

const postOrder = (req, res) => {
  try {
    const { order } = req.body;

    const finalOrder = createOrder(order);
  } catch (error) {}
};
