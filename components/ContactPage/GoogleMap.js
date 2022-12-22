import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";

const GoogleMap = () => {
  return (
    <>
      <div>
        <h1>google map</h1>
      </div>
      <div className="lest-contact text-center ml-2 mr-2 bg-black text-white h-80 w-full relative md:flex md:justify-around  lg:flex justify-around lg:h-10">
        <h2 className="text-2xl my-5 mx-3 p-4 md:w-2/5">
          We Help industries and organizations turn ideas into creativity and
          funds
        </h2>
        <div className="flex justify-center items-center w-3/5 ">
          <FiPhoneCall className="mr-4 text-3xl" />
          <div className="text-xl">
            <h1>Get Quick Support</h1>
            <p>+234 07034278995</p>
          </div>
        </div>
        <div className=" grid place-items-center w-3/5">
          <li className="flex justify-center text-center rounded-md items-center mt-8 mb-6 p-4 border-x-2 border-y-2 bg-orange-500 hover:bg-orange-300 hover:text-black">
            <a href="tel:+234 7034278995">
              <button className=" text-xl uppercase">Contact</button>
            </a>
            <BsArrowRightCircle className="ml-3 text-xl" />
          </li>
        </div>
      </div>
    </>
  );
};

export default GoogleMap;
