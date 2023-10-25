import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductList = ({ product, onSubmit }) => {
  return (
    <div className="ProductList">
      <ProductCard product={product} onSubmit={onSubmit} />
    </div>
  );
};

export default ProductList;
