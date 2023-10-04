const { Product } = require('../../db');

const createProduct = async (newProduct) => {
  const product = await Product.create(newProduct);

  return product;
};

module.exports = createProduct;
