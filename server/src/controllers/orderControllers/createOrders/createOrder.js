const { Order } = require('../../../db');

const createOrder = async (products, totalPrice) => {
  try {
    const createdOrder = await Order.create(products, totalPrice);
    if (!createdOrder) return false;
    return createdOrder;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = createOrder;
