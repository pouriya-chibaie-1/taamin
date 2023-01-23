import React, { createContext, useState } from "react";
export const Context = createContext({});
export const ContextProvider = props => {
  const [products, setProducts] = useState([]);
  const [partGroup, setPartGroup] = useState(0);
  const [loadingGridComponent ,setLoadingGridComponent] = useState(false);
  

  
  return (
    <Context.Provider
      value={{
        partGroup,
        setPartGroup,
        products,
        setProducts,
        loadingGridComponent,
        setLoadingGridComponent
      }}
    >
      {props.children}
    </Context.Provider>
  );
};