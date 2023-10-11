import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProducts: []
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.allProducts = action.payload;
    }
  }
});

export const { getAllProducts } = productSlice.actions;
export default productSlice.reducer;
