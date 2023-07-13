import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import store from "./store";
import App from './Components/App/App';
import { loadCartFromStorage } from './Reducers/cartReducer';
import reportWebVitals from './reportWebVitals';

const savedCartItems = localStorage.getItem('cartItems');
if (savedCartItems) {
  const parsedCartItems = JSON.parse(savedCartItems);
  store.dispatch(loadCartFromStorage(parsedCartItems));
  console.log('Loaded cart items from localStorage: ', store.getState().cart);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
