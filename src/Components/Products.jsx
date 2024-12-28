import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { asyncGetProducts } from "../Store/Actions/productsAction";

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(asyncGetProducts());
  }, [dispatch]);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {products?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
