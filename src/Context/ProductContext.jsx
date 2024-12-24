import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const productContext = createContext();

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
      console.log(data);
      
    } catch (err) {
        alert(err.message);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div>
      <productContext.Provider value={{ products, loading}}>
        {children}
      </productContext.Provider>
    </div>
  );
};

export default ProductContext;
