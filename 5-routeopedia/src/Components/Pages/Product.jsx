import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Product() {
  const navigate = useNavigate();

  return (
    <div>
      Product
      <button
        onClick={() => {
          navigate("/product/create");
        }}
      >
        Create product
      </button>
      <button>
        <Link to={"/product/details/100"}>Navigate to product details 100</Link>
      </button>
    </div>
  );
}

export default Product;
