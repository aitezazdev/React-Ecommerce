import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../Context/ProductContext";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { products, addToCart } = useContext(productContext);
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const navigate = useNavigate();

  const product = products.find((product) => product.id === parseInt(id));

  useEffect(() => {
    if (product) {
      setProductDetails(product);
    }
  }, [id, products]);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Added to cart!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
    });
  };

  if (!productDetails) {
    return (
      <div className=" bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className=" bg-gray-50 flex items-center justify-center p-2 mt-20">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row max-w-4xl w-full">
        <div className="md:w-2/5">
          <img
            src={productDetails.image}
            alt={productDetails.title}
            className="w-full h-full object-cover"
            style={{ height: "500px" }}
          />
        </div>

        <div className="md:w-3/5 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {productDetails.title}
          </h1>

          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-gray-600 font-medium w-24">Genre:</span>
              <span className="text-gray-800">{productDetails.genre}</span>
            </div>

            <div className="flex items-center">
              <span className="text-gray-600 font-medium w-24">Year:</span>
              <span className="text-gray-800">{productDetails.year}</span>
            </div>

            <div className="pt-4">
              <h2 className="text-gray-600 font-medium mb-2">Description:</h2>
              <p className="text-gray-800 leading-relaxed">
                {productDetails.description}
              </p>
            </div>
            <div className="flex justify-center gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-gray-800 hover:bg-gray-900 text-white text-sm py-2 px-5 font-medium rounded-md transition-all duration-300 ease-in-out transform"
            >
              Add To Cart
            </button>
            <button onClick={() => navigate("/cart")}
              className="bg-gray-800 hover:bg-gray-900 text-white text-sm py-2 px-5 font-medium rounded-md transition-all duration-300 ease-in-out transform"
            >
              Go To Cart
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
