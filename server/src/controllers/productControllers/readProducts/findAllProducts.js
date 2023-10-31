const { Product } = require('../../../db');

const findAllProducts = async (userId) => {
  try {
    const products = await Product.findAll();

    if (!products.length) return false;
    if (userId) return products;

    const mappedProducts = products.map((product) => {
      return { ...product.dataValues, specifications: [] };
    });

    return mappedProducts;
  } catch (error) {
    return error;
  }
};

module.exports = findAllProducts;
