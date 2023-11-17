import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProducts: [],
  allProductsCopy: [],
  popularProducts: []
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.allProducts = action.payload;
      state.allProductsCopy = action.payload;
    },

    filterProductsByName: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      const filteredProducts = state.allProductsCopy.filter((product) => {
        if (product.name) {
          const productNameNormalized = product.name
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
          return productNameNormalized.toLowerCase().includes(searchTerm);
        }
        return true;
      });
      state.allProducts = filteredProducts;
    },
    restoreProducts: (state) => {
      state.allProducts = state.allProductsCopy;
    },
    filterByCategory: (state, action) => {
      if (action.payload.toLowerCase() === 'ver todas') {
        state.allProducts = state.allProductsCopy;
      } else {
        const filteredProducts = state.allProductsCopy.filter(
          (product) => product.category.toLowerCase() === action.payload.toLowerCase()
        );
        state.allProducts = filteredProducts;
      }
    },
    filterByType: (state, action) => {
      if (action.payload.toLowerCase() === 'todos') {
        state.allProducts = state.allProductsCopy;
      } else {
        const filteredProducts = state.allProductsCopy.filter(
          (product) => product.type.toLowerCase() === action.payload.toLowerCase()
        );
        state.allProducts = filteredProducts;
      }
    },
    getPopularProducts: (state, action) => {
      const orderProducts = action.payload;
      console.log(orderProducts);

      const selledProduct = orderProducts.map((orderProduct) => orderProduct.products);

      console.log(selledProduct);
      /*   const sortedProducts = Object.keys(productCounts).sort(
        (a, b) => productCounts[b] - productCounts[a]
      );

      const popularProducts = sortedProducts.map((productId) =>
        state.allProductsCopy.find((product) => product.id === productId)
      ); */

      /* state.popularProducts = popularProducts; */
    }
  }
});

export const {
  getAllProducts,
  filterProductsByName,
  restoreProducts,
  filterByCategory,
  filterByType,
  getPopularProducts
} = productSlice.actions;
export default productSlice.reducer;
