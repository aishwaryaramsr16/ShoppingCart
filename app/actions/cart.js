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

        const response = await fetch(config.cartApi, { method: 'POST', body: JSON.stringify({}) });
        const cart = await response.json();

        dispatch({
            type: CART_LOADED,
            ...cart,
        })
    };
}
