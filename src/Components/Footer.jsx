import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto text-center">

        <p className="text-sm">
          &copy; {new Date().getFullYear()} MyShop. All rights reserved.
        </p>

        <p className="text-xs mt-2">
          Built with ❤️ and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
