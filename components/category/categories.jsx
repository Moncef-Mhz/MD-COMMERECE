import React from "react";
import { category } from "@utils";

function categories() {
  return (
    <div className="px-10 md:px-[72px]">
      <div className="flex w-full justify-between items-center my-3 md:my-5">
        <h1 className="lg:text-3xl text-xl font-lato font-black">
          Shop by category
        </h1>
        <p className="text-blue-400 cursor-pointer">See more {">"}</p>
      </div>
      <div className="my-5 grid grid-cols-1  md:grid-cols-2 w-full h-full gap-5">
        {category.map((item) => (
          <div
            key={item.id}
            className="w-full shadow-md  bg-black/40 md:last:col-span-2 lg:last:col-span-1 lg:first:row-span-2 lg:first:h-full   relative group h-[350px] cursor-pointer overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="object-cover lg:h-full h-[350px] w-full mix-blend-multiply group-hover:scale-110 duration-150 group-hover:rotate-2"
            />
            <div className="absolute bottom-0 left-0 p-8">
              <h1 className="  text-white text-2xl font-bold capitalize">
                {item.title}
              </h1>
              <p className="text-white cursor-pointer text-sm capitalize font-normal">
                Shop Now
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default categories;
