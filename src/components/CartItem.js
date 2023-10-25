import React from "react";
import "./CartItem.css";

const CartItem = ({ content }) => {
  return (
    <div className="cart-list_item" key={content.id}>
      <div className="cart-list_item-title">
        <div>{content.title}</div>
        <div className="item_unit-cost">
          <span className="item-price">{content.price} x </span>
          <div className="item-amount">{content.amount}</div>
        </div>
      </div>
      <div className="btn-container">
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
};

export default CartItem;
