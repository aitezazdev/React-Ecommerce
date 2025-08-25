import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { asyncGetProducts } from "../Store/Actions/productsAction";

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    dispatch(asyncGetProducts());
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  if (loading) {
    return (
      <div className="text-center min-h-[40vh] pt-24 text-3xl font-semibold text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <h1 className="text-4xl font-bold text-gray-800 my-6 text-center">
        Latest Products
      </h1>
      <div className="flex justify-center flex-wrap gap-5 my-4">
        <button
          onClick={() => filterByCategory("all")}
          className={`text-sm border border-black outline-none px-3 py-1 rounded hover:bg-black hover:text-white transition-all ${selectedCategory === "all" ? "bg-black text-white" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => filterByCategory("men's clothing")}
          className={`text-sm border border-black outline-none px-3 py-1 rounded hover:bg-black hover:text-white transition-all ${selectedCategory === "men's clothing" ? "bg-black text-white" : ""}`}
        >
          Men
        </button>
        <button
          onClick={() => filterByCategory("women's clothing")}
          className={`text-sm border border-black outline-none px-3 py-1 rounded hover:bg-black hover:text-white transition-all ${selectedCategory === "women's clothing" ? "bg-black text-white" : ""}`}
        >
          Women
        </button>
        <button
          onClick={() => filterByCategory("jewelery")}
          className={`text-sm border border-black outline-none px-3 py-1 rounded hover:bg-black hover:text-white transition-all ${selectedCategory === "jewelery" ? "bg-black text-white" : ""}`}
        >
          Jewelery
        </button>
        <button
          onClick={() => filterByCategory("electronics")}
          className={`text-sm border border-black outline-none px-3 py-1 rounded hover:bg-black hover:text-white transition-all ${selectedCategory === "electronics" ? "bg-black text-white" : ""}`}
        >
          Electronics
        </button>
      </div>
      <div className="flex gap-6 flex-wrap justify-center">
        {filteredProducts?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
