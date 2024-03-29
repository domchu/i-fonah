import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GiTimeBomb } from "react-icons/gi";
import socialIcons from "../SocialData";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="md:h-20 bg-black text-white left-0 top-0 w-full">
        {/* contact section of the project*/}
        <div className="hidden md:flex justify-around">
          <div className="flex items-center text-white-600 mt-6">
            <div className="flex items-center">
              <GiTimeBomb className="text-xl" />
              <p className="text-xm md:pl-2">
                Mon-Fri 08:00 - 18:00 | Saturday 10:00 - 16:00
              </p>
            </div>
            {/* vertical line */}
            <div className="hidden md:hidden lg:bg-gray-300 lg:flex lg:items-center lg:justify-center lg:h-8 lg:ml-2 lg:w-0.5 lg:m-auto"></div>
            {/* vertical line */}
            <div className="hidden sm:hidden lg:flex items-center pl-6 pr-3 ">
              <FiPhoneCall className="text-xl" />
              <p className="text-xm pl-2">+234(0) 703 4278 995</p>
            </div>
            {/* vertical line */}
            <div className="hidden md:hidden lg:bg-gray-300 lg:flex lg:items-center lg:justify-center lg:h-8 lg:ml-2 lg:w-0.5 lg:m-auto"></div>
            {/* vertical line */}
            <div className="flex items-center pl-4">
              <FaMapMarkerAlt className="text-xl" />
              <p className="text-xm pl-2">
                25 Allen Avenue, Ikeja. Lagos state
              </p>
            </div>
          </div>
          {/* icons section of the project */}
          <div className="flex items-center text-white mt-5 ">
            {socialIcons.map((item, index) => {
              const { url, icon } = item;
              return (
                <>
                  <ul>
                    <li
                      key={index}
                      className="hover:text-orange-400 hover:animate-bounce text-2xl pr-3"
                    >
                      <Link href={url} passHref>
                        {icon}
                      </Link>
                    </li>
                  </ul>
                </>
              );
            })}
          </div>
          {/* the icons section of the project */}
        </div>
      </div>
    </>
  );
};

export default Header;
