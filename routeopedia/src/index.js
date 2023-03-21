import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home"
import About from "./Components/About"
import Product from "./Components/Pages/Product"
import ProductList from "./Components/Pages/ProductList"
import CreateProduct from "./Components/Pages/CreateProduct"
import ProductDetails from "./Components/Pages/ProductDetails"
import Notfound from "./Components/NotFound"
import CryptoDetails from "./Components/CryptoDetails"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="crypto/detail">
          <Route path=":cryptoSymbol/:id" element={<CryptoDetails></CryptoDetails>} />
          <Route path=":cryptoSymbol" element={<CryptoDetails></CryptoDetails>} />
        </Route>
        <Route path="product">
          <Route index element={<Product></Product>} />
          <Route path="list" element={<ProductList></ProductList>} />
          <Route path="create" element={<CreateProduct></CreateProduct>} />
          <Route path="details" element={<ProductDetails></ProductDetails>} />
          <Route path="details/:productId" element={<ProductDetails></ProductDetails>} />
        </Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

