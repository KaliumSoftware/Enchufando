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
      state.cartProducts.push({
        ...action.payload,
        index: state.cartProducts.length
      });
    },
    deleteCart: (state, action) => {
      console.log(action.payload);
      state.cartProducts = state.cartProducts.filter(
        (product) => product.localId !== action.payload
      );
    }
  }
});

export const { getCart, addToCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
