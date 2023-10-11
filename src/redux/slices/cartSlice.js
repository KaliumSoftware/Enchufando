import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartProducts: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCart: (state, action) => {
      state.cartProducts = action.payload;
    },
    addToCart: (state, action) => {
      state.cartProducts.push(action.payload);
    }
  }
});

export const { getCart, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
