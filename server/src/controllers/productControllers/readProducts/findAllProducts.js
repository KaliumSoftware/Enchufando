const { Product } = require('../../../db');

const findAllProducts = async () => {
  try {
    const products = await Product.findAll();

    if (!products.length) return false;
    return products;
  } catch (error) {
    return error;
  }
};

module.exports = findAllProducts;
