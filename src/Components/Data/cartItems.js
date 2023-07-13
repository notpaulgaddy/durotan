// cartItems.js

const cartItems = [];

export const addToCart = (itemId, quantity) => {
  const newItem = {
    id: itemId,
    quantity: quantity,
  };
  cartItems.push(newItem);
  console.log(newItem)
};

export default cartItems;


// const cartItemsKey = "cartItems";

// const getCartItems = () => {
//   const cartItems = localStorage.getItem(cartItemsKey);
//   return cartItems ? JSON.parse(cartItems) : [];
// };

// const setCartItems = (items) => {
//   localStorage.setItem(cartItemsKey, JSON.stringify(items));
// };

// export const addToCart = (itemId, quantity) => {
//   const newItem = {
//     id: itemId,
//     quantity: quantity,
//   };
//   const cartItems = getCartItems();
//   const updatedCart = [...cartItems, newItem];
//   setCartItems(updatedCart);
// };

// export const getCart = () => {
//   return getCartItems();
// };

// export default getCartItems();