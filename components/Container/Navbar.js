// export default Navbar;

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  //dark mode initialization
  const [color, setColor] = useState("black");
  const [textColor, setTextColor] = useState("white");

  const handleMenu = () => {
    setMenu(!menu);
  };

  //dark mode
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#000");
        setTextColor("#fff");
      } else {
        setColor("#000");
        setTextColor("#fff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <>
      <div
        style={{ backgroundColor: `${color}` }}
        className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
      >
        <div className="max-w-[1240] m-auto flex justify-between items-center  text-white ">
          <Link href="/" className="hover:text-gray-500" passHref>
            <h1
              style={{ color: `${textColor}` }}
              className="font-bold text-3xl p-8 ml-40"
            >
              IFONAH
            </h1>
          </Link>
          <ul style={{ color: `${textColor}` }} className=" hidden sm:flex ">
            <li className="p-4 text-2xl  hover:text-gray-500">
              <Link href="/" passHref className="un-list">
                Home
              </Link>
            </li>
            <li className="p-4 text-2xl  hover:text-gray-500">
              <Link href="/about" passHref className="un-list">
                About
              </Link>
            </li>
            <li className="p-4 text-2xl  hover:text-gray-500">
              <Link href="/blog" passHref className="un-list">
                Blog
              </Link>
            </li>
            <li className="p-4 text-2xl  hover:text-gray-500">
              <Link href="/training" passHref className="un-list">
                Training
              </Link>
            </li>
            <li className="p-4 text-2xl  hover:text-gray-500-underline">
              <Link href="/services" passHref className="un-list">
                Services
              </Link>
            </li>
          </ul>
          <li className="p-4 text-2xl  hover:text-gray-500 list-none mr-60">
            <Link href="/contact" passHref className="un-list">
              Contact
            </Link>
          </li>

          {/* mobile button */}
          <div
            onClick={handleMenu}
            className="block sm:hidden z-10 cursor-pointer hover:text-gray-500 p-8"
          >
            <h1>Menu</h1>
            {menu ? (
              <AiOutlineClose size={30} style={{ color: `${textColor}` }} />
            ) : (
              <BiMenuAltRight size={30} style={{ color: `${textColor}` }} />
            )}
          </div>
          {/* mobile menu */}
          <div
            className={
              menu
                ? "sm:hidden absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                : "sm:hidden absolute left-[-100%] top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 py-8 px-8"
            }
          >
            <ul>
              <li
                onClick={handleMenu}
                className="p-4 text-4xl hover:text-gray-500 decoration-solid"
              >
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li
                onClick={handleMenu}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="/#about" passHref>
                  About
                </Link>
              </li>
              <li
                onClick={handleMenu}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="/blog" passHref>
                  Blog
                </Link>
              </li>
              <li
                onClick={handleMenu}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="/training" passHref>
                  Training
                </Link>
              </li>
              <li
                onClick={handleMenu}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="/services" passHref>
                  Services
                </Link>
              </li>
              <li
                onClick={handleMenu}
                className="p-4 text-4xl hover:text-gray-500 "
              >
                <Link href="/contact" passHref>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="underline"></div>
      </div>
    </>
  );
};

export default NavBar;
