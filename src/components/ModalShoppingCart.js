import React from "react";
import "./ModalShoppingCart.css";

const ModalShoppingCart = () => {
  return (
    <div className="ModalShoppingCart">
      <div className="cart-list">
        <div className="cart-list_item">
          <div className="cart-list_item-title">
            <div>피자</div>
            <div className="item_unit-cost">
              <span className="item-price">20000 x </span>
              <div className="item-amount">0</div>
            </div>
          </div>
          <div className="btn-container">
            <button>-</button>
            <button>+</button>
          </div>
        </div>
      </div>
      <div className="total-price">
        <div>전체 금액</div>
        <div>
          <div className="total-price_calc"></div>
          <div className="btn-container">
            <button type="cancel">취소</button>
            <button>결제</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalShoppingCart;
