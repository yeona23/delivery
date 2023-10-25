import { React, useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onSubmit }) => {
  const [quantity, setQuantity] = useState({});

  const updateQuantity = (contentId, newQuantity) => {
    setQuantity((preQuantity) => ({
      ...preQuantity,
      [contentId]: newQuantity,
    }));
  };

  return product.map((content) => (
    <div className="products" key={content.id}>
      <div className="product_title-price">
        <span>{content.title}</span>
        <span>{content.price}원</span>
      </div>
      <div className="btn-submit_amount">
        <div>
          <label htmlFor="amount">수량</label>
          <input
            id="amount"
            type="number"
            value={quantity[content.id] || 1}
            onChange={(e) =>
              updateQuantity(content.id, parseInt(e.target.value, 10))
            }
          />
        </div>
        <button
          onClick={() =>
            onSubmit({ ...content, amount: quantity[content.id] || 1 })
          }
        >
          추가하기
        </button>
      </div>
    </div>
  ));
};

export default ProductCard;
