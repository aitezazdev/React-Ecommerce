import React, { useContext } from "react";
import { productContext } from "../Context/ProductContext";

const Products = () => {
  const { products, loading } = useContext(productContext);

  if (loading) {
    return (
      <div className="text-center min-h-screen mt-20 text-3xl font-semibold text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <h1 className="text-4xl font-bold text-gray-800 my-6 text-center">
        Latest Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {products?.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition duration-300"
          >
            <div className="h-48 overflow-hidden p-2">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="px-4 py-2">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {product.title}
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                {product.description.slice(0, 50)}...
              </p>
            </div>
            <div className="flex items-center justify-between pl-4 py-2 pr-2">
              <p className="text-blue-500 text-xl font-bold">
                ${product.price}
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 font-semibold rounded transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
