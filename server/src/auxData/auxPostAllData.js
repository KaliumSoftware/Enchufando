/* // Copy and paste this into the productRouter file, and then make a POST request to /api/product/all.
// Falta también hacer la lógica para que solo se creé 1 producto para cada nombre
const arraysOfColumns = require('./../../auxData/listOfProducts');
const { Product } = require('../../db');

productRouter.post('/all', async (req, res) => {
  try {
    const types = arraysOfColumns[0].map((elem) => elem.trim());
    const codes = arraysOfColumns[1].map((elem) => elem.trim());
    const names = arraysOfColumns[2].map((elem) => elem.trim());
    const sizes = arraysOfColumns[3].map((elem) => elem.trim());
    const smallPacks = arraysOfColumns[4].map((elem) => elem.trim());
    const bigPacks = arraysOfColumns[5].map((elem) => elem.trim());
    const prices = arraysOfColumns[6].map((elem) => elem.trim());

    const allProducts = [];

    for (let index = 0; index < arraysOfColumns[0].length; index++) {
      const newProduct = {
        type: types[index],
        name: names[index],
        description: 'Descripción del producto',
        category: 'Agregar categoría',
        image: {
          url: 'https://img.freepik.com/vector-premium/conjunto-ilustracion-dibujos-animados-tubos-acero-iconos-aislados-conexiones-tuberias-metalicas-valvulas-bridas-desagues-sistemas-agua-o-aceite_74855-20730.jpg'
        },
        stock: 0,
        specifications: {
          code: codes[index],
          size: sizes[index],
          smallPack: smallPacks[index],
          bigPack: bigPacks[index],
          price: prices[index]
        }
      };

      allProducts.push(newProduct);
    }

    // console.log(allProducts);

    const allProductsClean = [];

    let stack = [];

    let stackSpecifications = [];

    for (let index = 0; index < allProducts.length; index++) {
      stack.push(allProducts[index]);
      if (allProducts[index].name !== allProducts[index + 1]?.name) {
        for (
          let stackIndex = 0;
          stackIndex < stack.length;
          stackIndex++
        ) {
          const newSpecification = {
            code: stack[stackIndex].specifications.code,
            size: stack[stackIndex].specifications.size,
            smallPack: stack[stackIndex].specifications.smallPack,
            bigPack: stack[stackIndex].specifications.bigPack,
            price: stack[stackIndex].specifications.price
          };

          if (stackIndex === 0) {
            allProductsClean.push(stack[stackIndex]);
            stackSpecifications.push(newSpecification);
          } else {
            stackSpecifications.push(newSpecification);
          }
        }

        allProductsClean[allProductsClean.length - 1].specifications =
          stackSpecifications;
        stackSpecifications = [];
        stack = [];
      }
    }

    // allProductsClean.forEach((product) => {
    //   console.log(product.specifications);
    // });
    // console.log(allProductsClean);

    for (const product of allProductsClean) {
      await Product.create(product);
    }

    res.status(200).send('Productos creados con exito');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});
 */
