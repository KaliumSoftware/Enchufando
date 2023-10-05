const { Order } = require('../../../db');

const createOrder = async (id, status) => {
  const order = await Order.create({ id, status });
};

module.exports = createOrder;
