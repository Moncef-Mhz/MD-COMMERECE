import React from "react";
import { collectionItems } from "@utils";

function collection() {
  return (
    <div className="px-10 my-2 md:px-[72px]">
      <div className="flex w-full justify-between items-center my-3 md:my-5">
        <h1 className="lg:text-3xl text-xl font-lato font-black">
          Collections you may love
        </h1>
        <p className="text-blue-400 cursor-pointer">See more {">"}</p>
      </div>
      <div className="flex items-center  w-full  justify-center gap-4 flex-wrap">
        {collectionItems.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden group cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.title}
              className="rounded-md w-[390px]  h-[350px] md:h-[420px] object-cover"
            />
            <div className="absolute top-0 left-0 items-center opacity-0  justify-center group-hover:opacity-100  flex duration-200 overflow-hidden w-full h-full  text-white bg-black/50 text-2xl capitalize rounded-md ">
              <h1>{item.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default collection;
