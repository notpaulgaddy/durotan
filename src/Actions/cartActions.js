export const CREATE_CART = "CREATE_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

export const createCart = (cartItems) => {
  return {
    type: CREATE_CART,
    payload: cartItems
  };
};

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: { id: itemId }
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART
  };
};
