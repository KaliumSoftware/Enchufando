const { Order, Product } = require('../../../db');

const createOrder = async (products, totalPrice, userId) => {
  try {
    await products.map((product) => {
      Product.update(
        { sales: product.sales + product.selectedSpec.quantity },
        { where: { id: product.id } }
      );
    });

    const createdOrder = await Order.create(products, totalPrice, userId);
    return createdOrder;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = createOrder;
