import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import ContactPage from "./Pages/ContactPage";
import CartPage from "./Pages/CartPage";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./Components/ScrollToTop";
import ProductDetails from "./Components/ProductDetails";
import Checkout from "./Pages/CheckoutPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <ToastContainer />
      <header>
        <Navbar />
      </header>

      <main className="flex-grow p-2">
          <Routes>
            <Route path="/React-Ecommerce" index element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
