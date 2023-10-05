const createOrder = require('../../../controllers');

const postOrder = (req, res) => {
  const { id } = req.params;

  const order = createOrder(id, status);
};
