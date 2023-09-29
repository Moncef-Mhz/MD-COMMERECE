import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function Hero() {
  return (
    <div className="w-full relative  mt-[80px]">
      <img
        src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        alt="hero"
        className="object-fit w-full -z-10"
      />
      <div className=" absolute top-0 left-0 flex items-center flex-col text-center w-full justify-center p-5 md:p-10">

        <h1 className="text-white font-frank text-2xl uppercase">New Arrival</h1>
        <p className="text-white font-frank text-base capitalize">More than 50% off</p>

        <button className="bg-dark cursor-pointer  text-white px-5 py-2 mt-10 font-frank text-lg">Go Shopping Now</button>
      </div>
      <div className="flex items-center justify-center gap-1 absolute bottom-0 left-0 w-full mb-5">
        <AiOutlineLeft size={12} className="mx-2 text-dark"/>
        <div className="w-3 h-3 rounded-full bg-dark border border-dark"></div>
        <div className="w-3 h-3 rounded-full bg-transparent border border-dark/70"></div>
        <div className="w-3 h-3 rounded-full bg-transparent border border-dark/70"></div>
        <div className="w-3 h-3 rounded-full bg-transparent border border-dark/70"></div>
        <AiOutlineRight size={12} className="mx-2 text-dark"/>
      </div>
    </div>
  );
}

export default Hero;
