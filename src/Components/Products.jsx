import { useContext } from "react";
import { productContext } from "../Context/ProductContext";
import ProductItem from "./ProductItem";

const Products = () => {
  const { products, loading } = useContext(productContext);

  if (loading) {
    return (
      <div className="text-center min-h-[40vh] mt-20 text-3xl font-semibold text-gray-600">
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
