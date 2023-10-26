import { React, useState } from "react";
import "./ModalShoppingCart.css";

const ModalShoppingCart = ({ cartItem, onDelete, closeModal, isOpened }) => {
  const [cartItems, setCartItems] = useState(cartItem);

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      // 모달 배경을 클릭했을 때만 모달을 닫음
      closeModal();
    }
  };
  if (!isOpened) {
    return null; // 모달이 닫혔을 때는 아무것도 렌더링하지 않음
  }

  const totalPriceCalc = cartItem.reduce((total, content) => {
    return total + content.price * content.amount;
  }, 0);

  const handleQuantityChange = (content, change) => {
    const updatedCartItems = cartItems.map((item) => {
      console.log("555");
      if (item.id === content.id) {
        const newAmount = item.amount + change;
        return { ...item, amount: newAmount >= 1 ? newAmount : 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <div
      className="ModalShoppingCart-container"
      onClick={handleBackgroundClick}
    >
      <div className="ModalShoppingCart">
        <div className="cart-list">
          {cartItem.map((content) => (
            <div className="cart-list_item" key={content.id}>
              <div className="cart-list_item-title">
                <div>{content.title}</div>
                <div className="item_unit-cost">
                  <span className="item-price">{content.price} x </span>
                  <div className="item-amount">{content.amount}</div>
                </div>
              </div>
              <div className="btn-container">
                <button onClick={() => handleQuantityChange(content, -1)}>
                  -
                </button>
                <button onClick={() => handleQuantityChange(content, +1)}>
                  +
                </button>
              </div>
              <div
                className="btn_delete"
                onClick={() => handleDelete(content.id)}
              >
                <span></span>
                <span></span>
              </div>
            </div>
          ))}{" "}
        </div>
        <div className="total-price">
          <div>전체 금액</div>
          <div>
            <div className="total-price_calc">{totalPriceCalc} 원</div>
            <div className="btn-container">
              <button type="cancel" onClick={handleBackgroundClick}>
                취소
              </button>
              <button>결제</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalShoppingCart;
