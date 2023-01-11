import React, { createContext, useState, useContext } from 'react';
import { productMock } from '../../mock/product'

export const ProductCreate = createContext()

export const ProductsContext = ({ children }) => {
  const [data, setData] = useState(productMock)
  return <ProductCreate.Provider value={[data, setData]}>
    {children}
  </ProductCreate.Provider>
}

export default ProductsContext