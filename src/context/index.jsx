import React, { createContext, useState } from "react";
export const Context = createContext({});
export const ContextProvider = props => {
  const [products, setProducts] = useState([]);
  const [partGroup, setPartGroup] = useState(0);
  const [pageContext, setPageContext] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [loadingGridComponent ,setLoadingGridComponent] = useState(false);
  

  
  return (
    <Context.Provider
      value={{
        partGroup,
        setPartGroup,
        products,
        setProducts,
        loadingGridComponent,
        setLoadingGridComponent,
        pageContext,
        setPageContext,
        numberOfPages,
        setNumberOfPages
      }}
    >
      {props.children}
    </Context.Provider>
  );
};