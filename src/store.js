import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Reducers/cartReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.subscribe(() => {
  const cartItems = store.getState().cart;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
});

export default store;