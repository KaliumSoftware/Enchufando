import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProducts: [],
  allProductsCopy: []
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
      const filteredProducts = state.allProductsCopy.filter(
        (product) => {
          if (product.name) {
            const productNameNormalized = product.name
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '');
            return productNameNormalized
              .toLowerCase()
              .includes(searchTerm);
          }
          return true;
        }
      );
      state.allProducts = filteredProducts;
    },
    restoreProducts: (state) => {
      state.allProducts = state.allProductsCopy;
    }
  }
});

export const {
  getAllProducts,
  filterProductsByName,
  restoreProducts
} = productSlice.actions;
export default productSlice.reducer;
