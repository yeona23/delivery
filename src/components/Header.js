import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h1>DeliveryApp</h1>
      <div className="shoppingList">
        장바구니
        <span>0</span>
      </div>
    </div>
  );
};

export default Header;
