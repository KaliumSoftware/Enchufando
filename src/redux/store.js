import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';
import userReducer from './slices/userSlice';
import paginationReducer from './slices/paginationSlice';
import orderReducer from './slices/orderSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
    pagination: paginationReducer,
    order: orderReducer
  }
});

export default store;
