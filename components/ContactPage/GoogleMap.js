import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { BsArrowRightCircle } from "react-icons/bs";
import NewsLetter from "./NewsLetter";

const GoogleMap = () => {
  return (
    <>
      <div>
        <h1 className="my-8">google map</h1>
      </div>
      <div className="lest-contact text-center ml-2 mr-2 bg-black text-white h-80 w-full relative md:flex md:justify-around md:h-60  lg:flex justify-around lg:h-40">
        <h2 className="text-2xl my-5 mx-3 p-4 md:w-3/5 md:mt-5 md:my-0">
          We Help industries and organizations turn ideas into creativity and
          funds
        </h2>
        {/* vertical line */}
        <div className="hidden md:hidden lg:bg-gray-300 lg:flex lg:items-center lg:justify-center lg:h-24 lg:w-0.5 lg:m-auto"></div>
        {/* vertical line */}
        <div className="flex justify-center items-center md:w-3/5 ">
          <FiPhoneCall className="mr-4 text-3xl" />
          <div className="text-xl lg:text-2xl">
            <h1>Get Quick Support</h1>
            <p>+234 07034278995</p>
          </div>
        </div>
        {/* vertical line */}
        <div className="hidden md:hidden lg:bg-gray-300 lg:flex lg:items-center lg:justify-center lg:h-24 lg:w-0.5 lg:m-auto"></div>
        {/* vertical line */}
        <div className=" grid place-items-center md:w-3/5">
          <li className="flex justify-center text-center rounded-md items-center mt-8 mb-6 p-4 border-x-2 border-y-2 bg-orange-500 hover:bg-orange-300 hover:text-black hover:animate-bounce">
            <a href="tel:+234 7034278995">
              <button className=" text-xl uppercase">Contact Us</button>
            </a>
            <BsArrowRightCircle className="ml-3 text-xl" />
          </li>
        </div>
      </div>
      <NewsLetter />
    </>
  );
};

export default GoogleMap;
