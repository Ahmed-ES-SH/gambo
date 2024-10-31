/* eslint-disable react/prop-types */
import { useContext, createContext, useState, useEffect } from "react";
import { Axiostool } from "../Constants/axiosfile";

const Data = createContext([]);

const Data_provider = ({ children }) => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    Axiostool.get("/products").then((data) => {
      setproducts(data.data);
    });
  }, []);

  return <Data.Provider value={{ products }}>{children}</Data.Provider>;
};

export default Data_provider;

export const Data_context = () => {
  return useContext(Data);
};
