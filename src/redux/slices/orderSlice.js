import { createSlice } from '@reduxjs/toolkit';
import { differenceInWeeks, parseISO, isToday } from 'date-fns';

const initialState = {
  orderProducts: [],
  allUserOrders: [],
  recentOrders: [],
  dailySales: {
    sales: 0,
    orders: 0
  },
  totalSales: 0
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.orderProducts = action.payload;
    },
    resetReducer: (state, action) => {
      if (action.type === 'RESET_STATE') {
        (state.allUserOrders = []),
          (state.recentOrders = []),
          (state.dailySales = {}),
          (state.totalSales = 0);
      }
    },
    setAllUserOrders: (state, action) => {
      state.allUserOrders = action.payload;
    },
    setRecentOrders: (state, action) => {
      const recentOrders = action.payload.filter((order) => {
        const orderDate = parseISO(order.createdAt);
        const weeksDifference = differenceInWeeks(new Date(), orderDate);
        return weeksDifference <= 3;
      });
      state.recentOrders = recentOrders.reverse();
    },
    setDailySales: (state) => {
      const todayOrders = state.orderProducts.filter((order) => {
        const orderDate = parseISO(order.createdAt);
        return isToday(orderDate);
      });

      state.dailySales.orders = todayOrders.length;
      state.dailySales.sales = todayOrders.reduce((acc, order) => {
        return acc + order.totalPrice;
      }, 0);
    },

    setAllSales: (state) => {
      const allOrders = state.orderProducts;

      state.totalSales = allOrders.reduce((total, order) => {
        return total + order.totalPrice;
      }, 0);
    }
  }
});

export const {
  setOrder,
  resetReducer,
  setAllUserOrders,
  setRecentOrders,
  setDailySales,
  setAllSales
} = orderSlice.actions;
export default orderSlice.reducer;
