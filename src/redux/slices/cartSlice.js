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
    setCart: (state, action) => {
      state.cartProducts = action.payload;

      localStorage.setItem(
        'cartProducts',
        JSON.stringify(state.cartProducts)
      );
    },
    addToCart: (state, action) => {
      state.cartProducts.push({
        ...action.payload
      });

      localStorage.setItem(
        'cartProducts',
        JSON.stringify(state.cartProducts)
      );
    },
    deleteCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.localId !== action.payload
      );

      localStorage.setItem(
        'cartProducts',
        JSON.stringify(state.cartProducts)
      );
    },
    setSpecificationsCart: (state, action) => {
      const { selectedSpec, localId } = action.payload;
      state.cartProducts = state.cartProducts.map((product) => {
        if (product.localId === localId) {
          return {
            ...product,
            selectedSpec
          };
        }
        return product;
      });

      localStorage.setItem(
        'cartProducts',
        JSON.stringify(state.cartProducts)
      );
    }
  }
});

export const {
  getCart,
  setCart,
  addToCart,
  deleteCart,
  setSpecificationsCart
} = cartSlice.actions;
export default cartSlice.reducer;
