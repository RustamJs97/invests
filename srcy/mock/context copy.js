import React, { createContext, useState, useContext } from 'react';

export const False = createContext()
export const Fals = () => useContext(False)

export const Context = ({ children }) => {
  const [data, setData] = useState(true)
  return <False.Provider value={[data, setData]}>
    {children}
  </False.Provider>
}

export default Context