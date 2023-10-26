import { createSlice } from '@reduxjs/toolkit';
import getUserOrders from '../../../utils/apiFunctions/getUserOrders';

const initialState = {
  orderProducts: [],
  allUserOrders: []
};
// id, name, image, selectedSpec, precio total, discount
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.orderProducts = action.payload;
    },
    getAllUserOrders: (state, action) => {
      getUserOrders(action.payload).then(
        (response) => (state.allUserOrders = response)
      );
    }
  }
});

export const { setOrder, getAllUserOrders } = orderSlice.actions;
export default orderSlice.reducer;
