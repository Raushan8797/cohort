import { createContext, useState } from "react";


export const MyStore = createContext();

export const ContextProvider = ({ children }) => {

    const [productsData, setProductsData] = useState([])
    console.log(productsData);
    const [singleProductData, setSingleProductData] = useState({})
    console.log(singleProductData);
    
    

  return <MyStore.Provider value={{productsData, setProductsData ,singleProductData, setSingleProductData}}>{children}</MyStore.Provider>;
};
