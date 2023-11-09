const { Order, Product } = require('../../../db');

const createOrder = async ({ products, totalPrice, userId }) => {
  try {
    await products.map(async (product) => {
      const quantity =
        product.quantity *
        (product.pack === 'small' ? product.smallPack : product.bigPack);
      const productToUpdate = await Product.findByPk(product.id);
      productToUpdate.dataValues.sales += quantity;
      await productToUpdate.update({
        sales: productToUpdate.dataValues.sales + quantity
      });
      await productToUpdate.save();
    });

    const createdOrder = await Order.create(products, totalPrice, userId);
    return createdOrder;
  } catch (error) {
    console.error(error.message);
    return false;
  }
};

module.exports = createOrder;
