import React from "react";

const ProductList = () => {
  return (
    <div className="ProductList">
      <div className="product_pizza">
        <div>
          <span>피자</span>
          <span>20000원</span>
        </div>
        <div>
          <div>
            <label for="amount">수량</label>
            <input id="amount" type="number" />
          </div>
          <button type="submit">추가하기</button>
        </div>
      </div>
      <div className="product_pizza">
        <div>
          <span>감치찌개</span>
          <span>9000원</span>
        </div>
        <div>
          <div>
            <label for="amount">수량</label>
            <input id="amount" type="number" />
          </div>
          <button type="submit">추가하기</button>
        </div>
      </div>
      <div className="product_pizza">
        <div>
          <span>자장면</span>
          <span>6500원</span>
        </div>
        <div>
          <div>
            <label for="amount">수량</label>
            <input id="amount" type="number" />
          </div>
          <button type="submit">추가하기</button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
