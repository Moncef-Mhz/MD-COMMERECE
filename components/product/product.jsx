import React from "react";

function product() {
  return (
    <div className="px-10 md:px-[72px]">
      <div className="flex w-full justify-between items-center my-3 md:my-5">
        <h1 className="text-3xl font-lato font-black">Shop by category</h1>
        <p className="text-blue-400 cursor-pointer">See more {">"}</p>
      </div>
    </div>
  );
}

export default product;
