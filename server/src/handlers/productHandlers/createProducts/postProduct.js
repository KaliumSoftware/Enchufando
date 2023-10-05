const { createProduct } = require('../../../controllers/');

const postProduct = async (req, res) => {
  try {
    const {
      name,
      packaging,
      measure,
      code,
      description,
      type,
      category,
      image,
      stock
    } = req.body;

    const newProduct = {
      name,
      packaging,
      measure,
      code,
      description,
      type,
      category,
      image,
      stock
    };

    const product = await createProduct(newProduct);

    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json('Error creating product');
  }
};

module.exports = postProduct;
