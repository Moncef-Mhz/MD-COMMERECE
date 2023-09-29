"use client";
import Link from "next/link";
import React, { useState } from "react";
import { navlinks } from "@utils";
import { usePathname } from "next/navigation";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";

function Navbar() {
  const params = usePathname();
  const [OpenMenu, setOpenMenu] = useState(false);
  const [OpenCart, setOpenCart] = useState(false);
  const [OpenSearch, setOpenSearch] = useState(false);

  return (
    <div className="w-full flex  items-center h-[80px] lg:h-[120px] relative float-right ">
      {/* Desktop View */}
      <div className=" hidden md:flex  items-center mb-6 ">
        <div className="text-3xl   font-frank font-black text-center absolute w-full">
          VELARRIO
        </div>
        <ul className="md:flex absolute hidden gap-10 float-right  right-0 mr-10">
          <li className="cursor-pointer text-lg font-frank">Search</li>
          <li className="cursor-pointer text-lg font-frank">Login</li>
          <li className="cursor-pointer text-lg font-frank">Cart (0)</li>
        </ul>
        <div className="px-6 md:hidden">
          <AiOutlineMenu
            size={20}
            onClick={() => setOpenMenu((prev) => !prev)}
          />
        </div>
      </div>
      <ul className="absolute bottom-0 hidden lg:flex items-center justify-center w-full">
        {navlinks.map((item) => (
          <Link
            href={`/${item.id}`}
            key={item.id}
            className={
              `/${item.id}` == params
                ? "mx-6 border-b font-frank text-lg text-dark duration-150"
                : "mx-6 font-frank text-lg duration-150 text-dark"
            }
          >
            {item.link}
          </Link>
        ))}
      </ul>
      {/* Mobile View */}

      <div className="flex z-10 bg-white h-full items-center w-full px-4 md:hidden justify-between ">
        <AiOutlineMenu
          size={25}
          onClick={() => setOpenMenu((prev) => !prev)}
          className="cursor-pointer"
        />
        <div className="text-3xl   font-frank font-black text-center  w-full">
          VELARRIO
        </div>
        <div className="flex items-center justify-center gap-1">
          <AiOutlineSearch
            size={25}
            onClick={() => setOpenSearch((prev) => !prev)}
          />
          <AiOutlineShoppingCart
            size={25}
            onClick={() => setOpenCart((prev) => !prev)}
          />
        </div>
      </div>

      <ul
        className={
          OpenMenu
            ? "absolute w-[70%] h-screen bg-dark top-0 left-0 z-[9]  scale-x-full origin-[0%_100%] duration-200 pt-[120px] flex items-center  flex-col gap-10 overflow-x-hidden"
            : "absolute w-[70%] h-screen  bg-dark top-0 left-0 z-[9]  scale-x-0 origin-[0%_100%] duration-200 overflow-x-hidden pt-[120px] flex items-center gap-10 flex-col"
        }
      >
        {navlinks.map((item) => (
          <Link
            href={`/${item.id}`}
            key={item.id}
            className={
              `/${item.id}` == params
                ? "mx-6 border-b font-frank text-xl text-white duration-150 "
                : "mx-6 font-frank text-xl duration-150 text-white/80 "
            }
          >
            {item.link}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
