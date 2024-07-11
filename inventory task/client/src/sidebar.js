
import React, { createContext, useState } from 'react';

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [showProduct, setShowProduct] = useState(true);

  const handleShowProduct = () => {
    setShowProduct(true);
  };

  const handleHideProduct = () => {
    setShowProduct(false);
  };

  return (
    <SidebarContext.Provider value={{ showProduct, handleShowProduct, handleHideProduct }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarProvider, SidebarContext };