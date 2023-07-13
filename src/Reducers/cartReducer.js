const ADD_TO_CART = "ADD_TO_CART";
const CLEAR_CART = "CLEAR_CART";
const SAVE_CART_TO_STORAGE = "SAVE_CART_TO_STORAGE";
const LOAD_CART_FROM_STORAGE = "LOAD_CART_FROM_STORAGE";

// Action Creators
export const addToCart = (item, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: item,
      quantity,
    },
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const saveCartToStorage = () => {
  return {
    type: SAVE_CART_TO_STORAGE,
  };
};

export const loadCartFromStorage = (cartItems) => {
  return {
    type: LOAD_CART_FROM_STORAGE,
    payload: cartItems,
  };
};

// Reducer
const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      
      if (itemIndex >= 0) {
        // If the item is already in the cart, increment its quantity
        return state.map((item, index) => 
          index === itemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        // If the item is not in the cart yet, add it
        return [...state, action.payload];
      }

    case CLEAR_CART:
      return [];

    case LOAD_CART_FROM_STORAGE:
      return action.payload;

    default:
      return state;
  }
};

export default cartReducer;
