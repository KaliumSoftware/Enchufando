import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderProducts: []
};
// id, name, image, selectedSpec, precio total, discount
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    getOrder: (state, action) => {
      state.orderProducts = action.payload;
    }
  }
});

export const { getOrder } = orderSlice.actions;
