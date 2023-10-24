const { Order } = require('../../../db');

const createOrder = async (products, totalPrice, userId) => {
  try {
    const createdOrder = await Order.create(
      products,
      totalPrice,
      userId
    );
    return createdOrder;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = createOrder;
