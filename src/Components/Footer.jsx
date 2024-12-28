import React from "react";

const Footer = () => {
  return (
    <footer className="py-10" style={{ boxShadow: "0px -1.2px 2px rgba(0, 0, 0, 0.1)" }}>
      <div className="container mx-auto text-center">
        <h2 className="text-lg font-semibold mb-2">
          Made with ❤️ by <a href="https://github.com/aitezazdev" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">aitezaz</a>
        </h2>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} ClickNCart. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
