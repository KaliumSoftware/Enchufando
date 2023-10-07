const { Product } = require('../../../db');

const createProduct = async (newProduct) => {
  try {
    const product = await Product.create(newProduct);

    return product;
  } catch (error) {
    return error;
  }
};

module.exports = createProduct;
