const { Product } = require('../../db');

const deleteProduct = async (id) => {
  try {
    const product = await Product.destroy({
      where: {
        id
      }
    });
    return product;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = deleteProduct;
