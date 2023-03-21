import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();

  return (
    <div>
      ProductDetails
      <div>Product ID: {productId}</div>
    </div>
  );
}

export default ProductDetails;
