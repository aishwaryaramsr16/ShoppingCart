import {
    CART_LOADED,
    ADD_TO_CART,
    DECRE_QTY,
    INCRE_QTY,
    DELETE_FROM_CART,
    CLEAR_CART,
  } from "../actions/cart";
  
  function cartReducer(state = { items: {} }, action) {
    switch (action.type) {
      case CART_LOADED:
        return {
          ...state,
          id: action.cartId,
          items: action.cartItems,
        };
  
      case CLEAR_CART:
        return { ...state, items: {} };
      case ADD_TO_CART:
        return {
          ...state,
          items: { ...state.items, ...action.payload.cartItems },
        };
  
      case DECRE_QTY:
        return {
          ...state,
          items: { ...state.items, ...action.payload.cartItems },
        };
      case INCRE_QTY:
        return {
          ...state,
          items: { ...state.items, ...action.payload.cartItems },
        };
      case DELETE_FROM_CART: {
        let newItems = Object.assign({}, state.items);
        delete newItems[action.payload];
        return {
          ...state,
          items: { ...newItems },
        };
      }
      default:
        return state;
    }
  }
  
  export default cartReducer;
  