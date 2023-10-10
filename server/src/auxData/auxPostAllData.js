/* // Copy and paste this into the productRouter file, and then make a POST request to /api/product/all.
// Falta también hacer la lógica para que solo se creé 1 producto para cada nombre
const arraysOfColumns = require('./../../auxData/listOfProducts');
const { Product } = require('../../db');

productRouter.post('/all', async (req, res) => {
  try {
    const categories = arraysOfColumns[0];
    const codes = arraysOfColumns[1];
    const names = arraysOfColumns[2];
    const smallPacks = arraysOfColumns[3];
    const bigPacks = arraysOfColumns[4];
    const prices = arraysOfColumns[5];
    // Faltaría agregar la columna sizes

    for (let index = 0; index < arraysOfColumns[0].length; index++) {
      const newProduct = {
        type: categories[index],
        name: names[index],
        description: 'Descripción del producto',
        category: 'Agregar categoría',
        image: {
          url: 'https://img.freepik.com/vector-premium/conjunto-ilustracion-dibujos-animados-tubos-acero-iconos-aislados-conexiones-tuberias-metalicas-valvulas-bridas-desagues-sistemas-agua-o-aceite_74855-20730.jpg'
        },
        stock: 0,
        specifications: [
          {
            code: codes[index],
            size: 'Medidas de Excel',
            smallPack: smallPacks[index],
            bigPack: bigPacks[index],
            price: prices[index]
          }
        ]
      };

      await Product.create(newProduct);
    }

    res.status(200).send('Productos creados con exito');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});
 */
