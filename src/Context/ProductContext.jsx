import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const productContext = createContext();

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
      // console.log(data);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (!existingProduct) {
      setCart((prevCart) => [...prevCart, product]);
    }
    console.log(cart);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id!== productId));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <productContext.Provider value={{ products, cart, addToCart, loading, removeFromCart }}>
        {children}
      </productContext.Provider>
    </div>
  );
};

export default ProductContext;
