import React from "react";

const CartList = ({
  cart,
  products,
  incrementQty,
  decrementQty,
  deleteItem,
}) => (
  <div className="mr-4">
    <h2>Cart</h2>
    <ul className="list-group">
      {Object.values(cart.items).map((cartItem) => {
        console.log(cartItem);
        return (
          <li
            className="list-group-item d-flex justify-content-between"
            key={cartItem.itemId}
          >
            <span>{products[cartItem.itemId - 1].name}</span>
            <span>£ {products[cartItem.itemId - 1].price}</span>
            <span>x {cartItem.quantity}</span>
            <span>
              = £{products[cartItem.itemId - 1].price * cartItem.quantity}
            </span>
            <button
              className="btn btn-outline-primary btn-sm"
              type="button"
              onClick={() => incrementQty(cartItem.itemId)}
            >
              +
            </button>
            <button
              className="btn btn-outline-primary btn-sm"
              type="button"
              onClick={() =>
                cartItem.quantity === 1
                  ? deleteItem(cartItem.itemId)
                  : decrementQty(cartItem.itemId)
              }
            >
              -
            </button>
            <button
              className="btn btn-outline-primary btn-sm"
              type="button"
              onClick={() => deleteItem(cartItem.itemId)}
            >
              x
            </button>
          </li>
        );
      })}
    </ul>
  </div>
);

export default CartList;
