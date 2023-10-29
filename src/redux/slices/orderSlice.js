import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderProducts: [],
  allUserOrders: []
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.orderProducts = action.payload;
    },
    setAllUserOrders: (state, action) => {
      state.allUserOrders = action.payload;
    }
  }
});

export const { setOrder, setAllUserOrders } = orderSlice.actions;
export default orderSlice.reducer;
