import React from "react";
import { useParams } from "react-router-dom";

function CryptoDetails() {
  const { cryptoSymbol, id } = useParams();

  return (
    <div>
      CryptoDetails
      <div>Params: {cryptoSymbol}</div>
      <div>Id: {id}</div>
    </div>
  );
}

export default CryptoDetails;
