import React, { useContext, useEffect, useState, createContext } from "react";
import { loadCart } from "../apiRequest";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [countCart, setCountCart] = useState(0);

  useEffect(() => {
    checkCountCart();
  }, []);

  const checkCountCart = async () => {
    const carts = await loadCart();
    setCountCart(
      carts?.products?.reduce((acc, product) => acc + product.quantity, 0)
    );
  };

  return (
    <GlobalContext.Provider value={{ countCart, checkCountCart }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { useGlobalContext, GlobalContextProvider };
