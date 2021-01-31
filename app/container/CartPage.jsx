import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ProductList, CartList } from "../components";

import {
  loadCart,
  addToCart,
  deleteFromCart,
  incrementQty,
  decrementQty,
  clearCart,
} from "../actions/cart";

export default function CartPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const { id } = cart;

  useEffect(() => {
    dispatch(loadCart());
  }, [loadCart, dispatch]);

  const addToCartHandler = (id) => {
    dispatch(addToCart(id));
  };

  const incrementQtyHandler = (id) => {
    dispatch(incrementQty(id));
  };
  const decrementQtyHandler = (id) => {
    dispatch(decrementQty(id));
  };

  const deleteFromCartHandler = (id) => {
    dispatch(deleteFromCart(id));
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const totalCartAmount = () => {
    let sum = 0;
    Object.values(cart.items).forEach((cartItem) => {
      sum += products[cartItem.itemId - 1].price * cartItem.quantity;
    });
    return sum;
  };

  if (!id) {
    return <div> Loading your cart </div>;
  }
  return (
    <div className="container">
      <header className="mt-5 mb-5">
        <h1>Shopping Cart</h1>
      </header>
      <main className="row">
        <section className="col">
          <ProductList products={products} addToCart={addToCartHandler} />
        </section>
        <section className="col">
          <CartList
            cart={cart}
            products={products}
            incrementQty={incrementQtyHandler}
            decrementQty={decrementQtyHandler}
            deleteItem={deleteFromCartHandler}
          />
        </section>
      </main>
      <br />
      <span className="float-right">Total £ {totalCartAmount()}</span>
      <br />
      <br />
      <button
        className="btn btn-outline-primary btn-sm  float-right"
        type="button"
        onClick={() => clearCartHandler()}
      >
        Clear Cart
      </button>
    </div>
  );
}
