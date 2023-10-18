const { createProduct } = require('../../../controllers');

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
    console.log(product);

    if (!product) throw new Error('Error al crear el producto');

    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postProduct;
