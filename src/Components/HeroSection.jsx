import React from "react";
import heroImg from "../assets/hero-tree.jpg";

const HeroSection = () => {
  return (
    <div className="relative mt-24 mx-auto h-[70vh] w-[95%]">
      <img
        src={heroImg}
        alt="hero-sec image"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-end text-white pb-4">
        <h1 className="text-4xl text-black text-center font-bold mb-2">Discover the Latest Trends</h1>
        <p className="text-lg text-black font-semibold text-center max-w-xl">
          Shop the newest arrivals and elevate your style with exclusive
          collections crafted just for you!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
