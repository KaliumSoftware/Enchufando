const { createOrder } = require('../../../controllers');

const postOrder = (req, res) => {
  try {
    const { products, totalPrice } = req.body;
    const finalOrder = createOrder(products, totalPrice);

    if (!products || !totalPrice)
      res
        .status(404)
        .json({ message: 'No hay productos o precio total' });

    return res.status(200).json(finalOrder);
  } catch (error) {
    return res.status(500).json({ message: 'Error en post order' });
  }
};

module.exports = postOrder;
