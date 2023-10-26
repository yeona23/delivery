import React from "react";
import "./Header.css";

const Header = ({ openModal, cartItem }) => {
  const cartItemCount = cartItem.length;

  return (
    <div className="Header">
      <h1>DeliveryApp</h1>
      <div className="shoppingCart" onClick={openModal}>
        장바구니
        <span>{cartItemCount}</span>
      </div>
    </div>
  );
};

export default Header;
