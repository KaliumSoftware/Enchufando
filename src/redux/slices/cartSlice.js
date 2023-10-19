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
    },
    setSpecificationsCart: (state, action) => {
      const { selectedSpec, localId } = action.payload;
      console.log(selectedSpec);
      state.cartProducts = state.cartProducts.map((product) => {
        if (product.localId === localId) {
          return {
            ...product,
            selectedSpec
          };
        }
        return product;
      });
    }
  }
});

export const {
  getCart,
  addToCart,
  deleteCart,
  setSpecificationsCart
} = cartSlice.actions;
export default cartSlice.reducer;
