import { createSlice } from '@reduxjs/toolkit';
import { differenceInWeeks, parseISO } from 'date-fns';

const initialState = {
  orderProducts: [],
  allUserOrders: [],
  recentOrders: []
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
    },
    setRecentOrders: (state, action) => {
      state.recentOrders = action.payload.filter((order) => {
        const orderDate = parseISO(order.createdAt);
        const weeksDifference = differenceInWeeks(new Date(), orderDate);
        return weeksDifference <= 3;
      });
    }
  }
});

export const { setOrder, setAllUserOrders, setRecentOrders } = orderSlice.actions;
export default orderSlice.reducer;
