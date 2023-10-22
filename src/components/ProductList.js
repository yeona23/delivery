import React from "react";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="ProductList">
      <div className="products product_pizza">
        <div className="product_title-price">
          <span>피자</span>
          <span>20000원</span>
        </div>
        <div className="btn-submit_amount">
          <div>
            <label htmlFor="amount">수량</label>
            <input id="amount" type="number" />
          </div>
          <button type="submit">추가하기</button>
        </div>
      </div>
      <div className="products product_kimchi">
        <div className="product_title-price">
          <span>김치찌개</span>
          <span>9000원</span>
        </div>
        <div className="btn-submit_amount">
          <div>
            <label htmlFor="amount">수량</label>
            <input id="amount" type="number" />
          </div>
          <button type="submit">추가하기</button>
        </div>
      </div>
      <div className="products product_jajjang">
        <div className="product_title-price">
          <span>자장면</span>
          <span>6500원</span>
        </div>
        <div className="btn-submit_amount">
          <div>
            <label htmlFor="amount">수량</label>
            <input id="amount" type="number" />
          </div>
          <button type="submit">추가하기</button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
