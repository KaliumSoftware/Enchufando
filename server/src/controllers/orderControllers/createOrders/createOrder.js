const { Order } = require('../../../db');

const createOrder = async (order) => {
  try {
    const createdOrder = await Order.create(order);
    if (!createdOrder) return false;
    return createdOrder;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = createOrder;
