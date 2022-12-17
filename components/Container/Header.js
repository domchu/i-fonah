import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="md:h-20 bg-gray-200 text-black left-0 top-0 w-full">
      {/* contact section of the project*/}
      <div className="hidden md:flex justify-around">
        <div className="flex">
          <div className="flex items-center">
            <FaFacebook />
            <p className="text-xm">+234(0) 703 4278 995</p>
          </div>
          <div className="flex items-center">
            <FaFacebook />
            <p className="text-xm">+234(0) 703 4278 995</p>
          </div>
          <div className="flex items-center">
            <FaFacebook />
            <p className="text-xm"> 25 Allen Avenue, Ikeja. Lagos state</p>
          </div>
        </div>
        {/* icons section of the project */}
        <div>
          <ul className="flex">
            <li className="hover:text-orange-400 hover:animate-bounce text-xl">
              <a href="https://www.twitter.com">
                <FaLinkedin />
              </a>
            </li>
            <li className="hover:text-orange-400 hover:animate-bounce text-xl ">
              <a href="https://www.twitter.com">
                <FaFacebook />
              </a>
            </li>
            <li className="hover:text-orange-400 hover:animate-bounce text-xl">
              <a href="https://www.twitter.com">
                <FaTwitter />
              </a>
            </li>
            <li className="hover:text-orange-400 hover:animate-bounce text-xl">
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
  );
};

export default Header;
