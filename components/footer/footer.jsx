import React from "react";
import {
  AiOutlineDribbble,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
function footer() {
  return (
    <div className="px-10 md:px-[72px] pt-10 mt-3 w-full h-full bg-dark text-white">
      <div className="flex items-start md:flex-center  flex-col md:flex-row justify-between ">
        <div className="flex items-start gap-3 flex-col   md:border-r border-white/50 w-full pb-5 mb-5">
          <h1 className="text-xl">Help & Information</h1>
          <ul className="flex flex-col gap-2 items-start  font-light text-white ">
            <li className="underline cursor-pointer">About us</li>
            <li className="underline cursor-pointer">Contact us</li>
            <li className="underline cursor-pointer">Account</li>
            <li className="underline cursor-pointer">Story</li>
          </ul>
        </div>
        <div className="flex items-start gap-3 flex-col  md:ml-2 ml-0 md:border-r border-white/50 w-full pb-5 mb-5">
          <h1 className="text-xl">Legal</h1>
          <ul className="flex flex-col gap-2 items-start  font-light text-white ">
            <li className="underline cursor-pointer">Home</li>
            <li className="underline cursor-pointer">Men</li>
            <li className="underline cursor-pointer">Women</li>
            <li className="underline cursor-pointer">Accessory</li>
          </ul>
        </div>
        <div className="flex items-start gap-3 flex-col md:ml-2 ml-0 border-white/50 w-full pb-5 mb-5">
          <h1 className="text-xl">Follow us</h1>
          <ul className="flex flex-row gap-2 items-start  font-light text-white ">
            <li className=" cursor-pointer">
              <AiOutlineInstagram size={20} />
            </li>
            <li className=" cursor-pointer">
              <AiOutlineFacebook size={20} />
            </li>
            <li className=" cursor-pointer">
              <FaXTwitter size={20} />
            </li>
            <li className=" cursor-pointer">
              <AiOutlineDribbble size={20} />
            </li>
          </ul>
          <h1 className="text-xl">Newsletter</h1>
          <div className="h-10 w-[80%] flex items-center">
            <input
              type="text"
              placeholder="Email.."
              className="bg-gray px-5 text-dark outline-dark-blue rounded-l w-[70%] h-full"
            />
            <button className="w-[30%] bg-dark-blue rounded-r h-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex  flex-col-reverse md:flex-row items-center justify-between border-t border-white/50 pb-5 pt-2">
        <h1 className="text-center w-[60%] text-lg md:w-full md:text-start">
          © 2023 Moncef & Djamale, All right reserved{" "}
        </h1>
        <div className="flex items-center justify-between w-full px-5 md:px-0 md:pl-32 ">
          <h1 className="text-base mb-3 md:mb-0 ">Privacy policy</h1>
          <h1 className="text-base mb-3 md:mb-0">Terms & condition</h1>
        </div>
      </div>
    </div>
  );
}

export default footer;
