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
      <div className="lest-contact text-center ml-2 mr-2 bg-black text-white h-60 relative md:flex md:justify-around lg:flex justify-around lg:h-10">
        <h2 className="text-2xl">
          We Help industries and organizations turn ideas into creativity and
          funds
        </h2>
        <div className="flex items-center text-center">
          <FiPhoneCall />
          <div>
            <h1>Get Quick Support</h1>
            <p>+234 07034278995</p>
          </div>
        </div>
        <li className="flex items-center p-4 border-x-2 border-y-2 w-1/5 bg-orange-500 ">
          <a href="tel:+234 7034278995">Contact</a>
          <BsArrowRightCircle />
        </li>
      </div>
    </>
  );
};

export default GoogleMap;
