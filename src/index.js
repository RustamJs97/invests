import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Rout from './root'
import 'antd/dist/reset.css';
import { BrowserRouter } from 'react-router-dom';
import ProductsContext from './context/products/productsContex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsContext>
      <BrowserRouter>
        <Rout />
      </BrowserRouter>
    </ProductsContext>
  </React.StrictMode>
);

