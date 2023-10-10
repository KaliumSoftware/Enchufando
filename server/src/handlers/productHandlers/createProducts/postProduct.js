const { createProduct } = require('../../../controllers/');

const postProduct = async (req, res) => {
  try {
    const {
      name,
      specifications,
      description,
      type,
      category,
      image,
      stock
    } = req.body;

    const newProduct = {
      name,
      specifications,
      description,
      type,
      category,
      image,
      stock
    };

    const product = await createProduct(newProduct);

    if (product.errors) return res.status(400).json(product);

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json('Error creating product');
  }
};

module.exports = postProduct;
