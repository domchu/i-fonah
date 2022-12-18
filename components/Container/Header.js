import React from "react";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GiTimeBomb } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <div className="md:h-14 bg-gray-200 text-black left-0 top-0 w-full">
        {/* contact section of the project*/}
        <div className="hidden md:flex justify-around">
          <div className="flex items-center text-gray-600 mt-5">
            <div className="flex items-center">
              <GiTimeBomb className="text-xl" />
              <p className="text-xm pl-2">
                Mon-Fri 08:00 - 18:00 | Saturday 10:00 - 16:00
              </p>
            </div>
            <div className="flex items-center pr-6 pl-6">
              <FiPhoneCall className="text-xl" />
              <p className="text-xm pl-2">+234(0) 703 4278 995</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-xl" />
              <p className="text-xm pl-2">
                25 Allen Avenue, Ikeja. Lagos state
              </p>
            </div>
          </div>
          {/* icons section of the project */}
          <div>
            <ul className="flex items-center text-gray-600 mt-5">
              <li className="hover:text-orange-400 hover:animate-bounce text-xl pr-3">
                <a href="https://www.twitter.com">
                  <FaLinkedin />
                </a>
                {/* <div className="h-10 w4 text-black-400"></div> */}
              </li>
              <li className="hover:text-orange-400 hover:animate-bounce text-xl pr-3">
                <a href="https://www.twitter.com">
                  <FaFacebook />
                </a>
              </li>
              <li className="hover:text-orange-400 hover:animate-bounce text-xl pr-3">
                <a href="https://www.twitter.com">
                  <FaTwitter />
                </a>
              </li>
              <li className="hover:text-orange-400 hover:animate-bounce text-xl pr-3">
                <a href="https://www.twitter.com">
                  <FaWhatsapp />
                </a>
              </li>
              <li className=" hover:text-orange-400 hover:animate-spin text-xl">
                <a href="https://www.twitter.com">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
