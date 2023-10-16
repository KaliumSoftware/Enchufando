const { createProduct } = require('../../../controllers/index');

const postProduct = async (req, res) => {
  try {
    const { name, specifications, type, category, image, price } =
      req.body;

    const newProduct = {
      name,
      specifications,
      type,
      category,
      image,
      price
    };

    const product = await createProduct(newProduct);

    if (product.errors) return res.status(400).json(product);

    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json('Error creating product');
  }
};

module.exports = postProduct;
