const { Product } = require('../../../db');

const findAllProducts = () => {
  try {
    const products = Product.findAll();
    if (!products.length) return false;
    return products;
  } catch (error) {
    return error;
  }
};

module.exports = findAllProducts;
