import React from "react";
import { productItems } from "@utils";
function product() {
  return (
    <div className="px-10 my-2 md:px-[72px]">
      <div className="flex w-full justify-between items-center my-3 md:my-5">
        <h1 className="text-3xl font-lato font-black">Shop by category</h1>
        <p className="text-blue-400 cursor-pointer">See more {">"}</p>
      </div>

      <div className="grid my-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full  gap-4">
        {productItems.map((item) => (
          <div key={item.id} className="cursor-pointer  group w-full">
            <img
              src={item.img}
              alt={item.title}
              className="h-[400px] w-full object-cover rounded "
            />
            <div className="p-2">
              <h1 className="text-lg ">{item.title}</h1>
              <p className="text-base">{item.price} DA</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default product;
