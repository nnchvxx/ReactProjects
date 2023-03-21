import React from "react";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const navigate = useNavigate();

  return (
    <div>
      ProductList
      <button
        onClick={() => {
          navigate("/product/create");
        }}
      >
        Create product
      </button>
    </div>
  );
}

export default ProductList;
