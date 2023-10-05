const { Product } = require('../../../db');

const findProductByPk = (id) => {
  try {
    const product = Product.findByPk(id);
    if (!product) return false;
    return product;
  } catch (error) {
    return false;
  }
};
module.exports = findProductByPk;
