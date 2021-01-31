import axios from "axios";

export const CART_LOADING = "CART_LOADING";
export const CART_LOADED = "CART_LOADED";
export const ADD_TO_CART = "ADD_TO_CART";
export const INCRE_QTY = "INCREMENT_QTY";
export const DECRE_QTY = "DECREMENT_QTY";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

export function loadCart() {
  return async (dispatch, _, config) => {
    dispatch({ type: CART_LOADING });

    const response = await fetch(config.cartApi, {
      method: "POST",
      body: JSON.stringify({}),
    });
    const cart = await response.json();

    dispatch({
      type: CART_LOADED,
      ...cart,
    });
  };
}

export function addToCart(id) {
  return async (dispatch, getState, config) => {
    const { data } = await axios.post(
      config.cartApi + `/${getState().cart.id}/item/${id}`,
      { quantity: 1 }
    );
    dispatch({
      type: ADD_TO_CART,
      payload: {
        ...data,
      },
    });
  };
}

export function incrementQty(id) {
  return async (dispatch, getState, config) => {
    const { data } = await axios.post(
      config.cartApi + `/${getState().cart.id}/item/${id}/increment`
    );

    dispatch({
      type: INCRE_QTY,
      payload: {
        ...data,
      },
    });
  };
}

export function decrementQty(id) {
  return async (dispatch, getState, config) => {
    const { data } = await axios.post(
      config.cartApi + `/${getState().cart.id}/item/${id}/decrement`
    );

    dispatch({
      type: DECRE_QTY,
      payload: {
        ...data,
      },
    });
  };
}

export function deleteFromCart(id) {
  return async (dispatch, getState, config) => {
    await axios.delete(config.cartApi + `/${getState().cart.id}/item/${id}`);
    dispatch({
      type: DELETE_FROM_CART,
      payload: id,
    });
  };
}

export function clearCart() {
  return async (dispatch, getState, config) => {
    await axios.post(config.cartApi + `/${getState().cart.id}/clear`);
    dispatch({
      type: CLEAR_CART,
    });
  };
}
